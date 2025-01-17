const fs = require("fs");

const mermaidCode = `
sequenceDiagram
    participant Client
    participant Gateway
    participant Auth_Service
    participant Score_Service
    participant Action_Validation
    participant User_Service
    participant Database
    participant WebSocket
    participant Redis_Cache
    participant Kafka
    participant Logging_Service

    %% Client Login with OTP and SSO
    Client ->> Gateway: POST /api/login (phone/email + OTP)
    Gateway ->> Auth_Service: Validate OTP or SSO Token
    Auth_Service -->> Gateway: Success/Failure
    Gateway ->> Logging_Service: Log User Login Attempt
    Gateway -->> Client: JWT Token (if success)

    %% Client Action
    Client ->> Gateway: POST /api/score/update (JWT + actionId)
    Gateway ->> Auth_Service: Validate JWT
    Auth_Service -->> Gateway: Valid User
    Gateway ->> Logging_Service: Log Score Update Request
    Gateway ->> Score_Service: Process Score Update
    Score_Service ->> Action_Validation: Validate Action
    Action_Validation -->> Score_Service: Valid Action
    Score_Service ->> Kafka: Publish Score Update Event
    Kafka -->> Database: Update Score (Asynchronous)
    Kafka -->> Redis_Cache: Update Top Scores Cache
    Redis_Cache -->> Gateway: Updated Cache

    %% Real-Time Updates
    Score_Service ->> WebSocket: Notify Real-Time Update
    WebSocket -->> Client: Updated Scoreboard

    %% User Online/Offline Status
    Client ->> Gateway: WebSocket Connection (Online Status)
    Gateway ->> User_Service: Update User Online Status
    User_Service ->> Kafka: Publish User Status Event
    Kafka -->> Redis_Cache: Update User Status Cache
    Redis_Cache -->> Gateway: Online Status Updated
    Gateway -->> Client: User Online/Offline Status

    %% Top Scores Retrieval
    Client ->> Gateway: GET /api/score/top
    Gateway ->> Redis_Cache: Retrieve Top Scores
    Redis_Cache -->> Gateway: Cached Top Scores
    Gateway -->> Client: Top Scores
    Redis_Cache ->> Database: Fallback if Cache Miss
    Database -->> Redis_Cache: Top Scores Data

    %% Logging System Integration
    Kafka ->> Logging_Service: Log Score and User Events
`;

fs.writeFileSync("scoreboard_service.mmd", mermaidCode, "utf8");

console.log(
  "Mermaid sequence diagram code updated in scoreboard_service.mmd"
);
