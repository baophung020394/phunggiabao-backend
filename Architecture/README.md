# README.md

## Solution Overview

The `scoreboard_service.js` file introduces a number of enhancements and architectural decisions to meet the requirements and optimize performance for the scoreboard system. These improvements include:

### Key Features Added

1. **Microservices Architecture**:

   - The system is divided into multiple microservices for modularity and scalability:
     - **Auth_Service**: Handles OTP/SSO-based authentication.
     - **Score_Service**: Processes score updates.
     - **User_Service**: Tracks user online/offline status.
     - **Logging_Service**: Logs user activities for monitoring and debugging.

2. **Real-time Updates with WebSocket**:

   - WebSocket is used to notify clients of score updates and online/offline status in real time.

3. **Kafka for Event Streaming**:

   - Apache Kafka is utilized to handle asynchronous updates to the database and Redis Cache for better performance and reliability under high load.

4. **Redis Cache**:

   - Redis is used to store frequently accessed data such as top scores and user statuses to reduce load on the database.

5. **Gateway with Load Balancer**:

   - A Gateway layer is introduced with the option to integrate a load balancer (e.g., NGINX or AWS ELB) to handle large volumes of requests.

6. **User Monitoring**:

   - The system tracks and updates user online/offline status in real time.

7. **Improved Logging**:
   - Centralized logging using a dedicated `Logging_Service` ensures better monitoring of user actions and system events.

---

## Explanation of Solutions and Optimizations

### 1. **Microservices Architecture**

- **Why?**: Improves scalability and modularity, making it easier to manage and scale individual components without affecting the whole system.
- **How?**:
  - Each service (Auth, Score, User, Logging) has a well-defined responsibility.
  - Services communicate via Kafka, ensuring decoupled and asynchronous communication.

### 2. **Real-Time Updates**

- **Why?**: Users need live updates for the scoreboard and online/offline status.
- **How?**: WebSocket connections push updates directly to clients whenever a score changes or a user connects/disconnects.

### 3. **Kafka for Event Handling**

- **Why?**: Kafka ensures high-throughput, fault-tolerant, and distributed message streaming for score updates and user statuses.
- **How?**:
  - Kafka topics handle events such as `Score Update` and `User Status Update`.
  - Consumers process these events to update the database and Redis Cache asynchronously.

### 4. **Redis Cache**

- **Why?**: Improves response time for frequently accessed data (e.g., top scores).
- **How?**:
  - Redis serves as an in-memory data store for quick access to the top scores and user status.
  - Cache invalidation occurs when Kafka publishes new updates.

### 5. **Load Balancing**

- **Why?**: Ensures the system can handle a large number of concurrent requests.
- **How?**:
  - A load balancer distributes incoming requests across multiple Gateway instances, ensuring no single server is overwhelmed.

### 6. **Logging and Monitoring**

- **Why?**: Centralized logging helps detect issues and monitor user activity.
- **How?**:
  - `Logging_Service` records events like login attempts, score updates, and user status changes for monitoring and debugging.

---

## Benefits of the Enhancements

1. **Scalability**:

   - The microservices architecture and Kafka ensure the system can handle increasing loads effectively.

2. **Performance**:

   - Redis Cache and asynchronous processing with Kafka improve response times and reduce latency.

3. **Real-Time Updates**:

   - WebSocket ensures immediate updates to users without repeated polling.

4. **Security**:

   - OTP/SSO authentication and JWT validation prevent unauthorized score updates.

5. **User Monitoring**:
   - Real-time user status tracking improves the user experience and enables better system monitoring.

---

## Alignment with Requirements

### **Requirement 1**: Website with a scoreboard showing top 10 user scores.

- **Solution**: Redis Cache stores and retrieves top 10 scores efficiently.

### **Requirement 2**: Live updates of the scoreboard.

- **Solution**: WebSocket sends real-time updates for scores and statuses.

### **Requirement 3**: Users increase scores by completing actions.

- **Solution**: Score updates are handled asynchronously via Kafka and validated through the `Score_Service`.

### **Requirement 4**: API call dispatches score updates to the server.

- **Solution**: Gateway forwards update requests to the `Score_Service` for processing.

### **Requirement 5**: Prevent unauthorized score increases.

- **Solution**: Authentication via OTP/SSO and JWT validation ensures secure access.

---

This architecture ensures the system is scalable, performant, and secure while meeting all specified requirements.

## How to generate image file

1. Run file js to create file mmd

```bash
node scoreboard_service.js
```

2. Create image file

```bash
mmdc -i scoreboard_service.mmd -o scoreboard_service.png -s 2
```
