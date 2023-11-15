## The Architect

The titles "Software Architect," "Product Architect," and "Solutions Architect" reflect different roles within the technology industry, each with a unique focus and set of responsibilities:

1. **Software Architect**: 
   - **Focus**: This role is primarily concerned with the architecture of software systems.
   - **Responsibilities**: A Software Architect makes high-level design choices and dictates technical standards, including software coding standards, tools, and platforms. They are involved in the design and development phases of complex systems, often requiring hands-on work in programming, troubleshooting, and managing technical challenges.

2. **Product Architect**:
   - **Focus**: The Product Architect is focused on the technical vision and design of a particular product.
   - **Responsibilities**: They are responsible for aligning the product’s strategy with its technical execution, ensuring the product can scale, meet market needs, and adhere to constraints. They work closely with product management to translate business requirements into technical solutions.

3. **Solutions Architect**:
   - **Focus**: Solutions Architects are concerned with solving specific business problems with architecture and design solutions that integrate various components of a system.
   - **Responsibilities**: They design the architecture of a system that fits a particular business context, considering the integration of different pieces such as hardware, software, cloud services, and other technologies. They often work with external clients and stakeholders to understand their needs and translate them into technical requirements.

In practice, the boundaries between these roles can be fluid, and the titles are sometimes used interchangeably or combined depending on the organization's size, structure, and projects. Here are some key differences:

- **Breadth of Focus**: Software Architects may focus on the technical aspects of software development, while Product Architects have a broader view, including the business aspects related to a particular product. Solutions Architects need to understand various systems and how they can be integrated to address broader business issues.
- **Scope of Influence**: Software Architects are typically focused on the inner workings of software systems, Product Architects influence the product lifecycle from a technical perspective, and Solutions Architects influence how different products and systems work together to create a comprehensive solution.
- **Interaction with Stakeholders**: Software Architects often interact with the development team, Product Architects with the product management and development teams, and Solutions Architects with clients, sales teams, and the development team to ensure that the solution fits the client’s environment and needs.

### Design Patterns

#### Creational:
1. Singleton
2. Factory Method
3. Abstract Factory
4. Builder
5. Prototype

#### Structural:
1. Adapter
2. Bridge
3. Composite
4. Decorator
5. Facade
6. Flyweight
7. Proxy

#### Behavioral:
1. Observer
2. Mediator
3. Command
4. State
5. Strategy
6. Chain of Responsibility
7. Template Method
8. Visitor
9. Interpreter
10. Memento
11. Iterator


### Architectural Patterns
1. Layered (or N-tier) Architecture
2. Event-Driven Architecture
3. Microkernel Architecture
4. Microservices Architecture
5. Space-Based (or Cloud) Architecture
6. Monolithic Architecture
7. Peer-to-Peer (P2P) Architecture
8. Service-Oriented Architecture (SOA)
9. Hexagonal Architecture (or Ports and Adapters)
10. Blackboard Architecture
11. Pipe and Filter Architecture
12. Broker Architecture
13. Model-View-Controller (MVC)
14. Model-View-Presenter (MVP)
15. Model-View-ViewModel (MVVM)
16. CQRS (Command Query Responsibility Segregation)
17. Lambda Architecture
18. Big Ball of Mud
19. Event Sourcing


## Domain-Driven Design (DDD)

DDD is an approach to software development that emphasizes collaboration between domain experts and software developers to create a domain model that solves real-world problems. The main goal is to tackle complex software projects by focusing on the domain's core concepts and logic.

1. **Talk the Same Language:** Everyone involved, whether they are tech experts or business experts, should use the same terms and language when discussing the project. This ensures clarity and avoids confusion.
  
2. **Understand the Domain:** Before writing any code, take the time to understand the business or area you're working in. What are its main parts and rules? 

3. **Break Things Down:** Separate the big problem into smaller, more manageable parts. This makes it easier to work on.

4. **Use Real-World Concepts in Code:** When coding, use names and structures that reflect real-world concepts. For instance, if you're building a library system, you might have code objects like "Book" and "Borrower."

5. **Protect Your Data:** Group related data together and set rules about how and when it can be changed.

6. **Stay Flexible:** As you learn more or as things change, be ready to adjust your code to keep it aligned with the business needs.

In short, DDD is about building software that mirrors the real-world needs and structures of a business or domain, ensuring everyone is on the same page, and making sure the software remains relevant and adaptable.

## HLD vs LLD

High-Level Design (HLD) and Low-Level Design (LLD) are two critical phases in the software design process. Here are 5 key points for each:

### High-Level Design (HLD):

1. **Overview and Abstraction**: HLD provides a high-level view of the system, which focuses on how the components interact with each other. It's more about what the system should do, rather than how it should do it.
 
2. **Components Identification**: At this level, the system is divided into smaller sub-systems or modules and their interactions are defined. For example, in a banking software system, modules could be Account Management, Transaction Management, User Interface, and Database Management.

3. **Technology Independent**: HLD doesn't go into the details of specific technologies or tools. It focuses on the architecture and design patterns.

4. **For Stakeholders**: HLD is typically used for communication with stakeholders (like clients, project managers, and team leads) who need a general understanding of the system without getting into the nitty-gritty technical details.

5. **Architectural Diagrams**: Diagrams like system architecture diagrams, data flow diagrams, and ER diagrams are often used in HLD to represent the overall structure and relationships.

### Low-Level Design (LLD):

1. **Detail-Oriented**: LLD delves into the details of how the system will be built. It's all about how the system should achieve what's defined in the HLD.

2. **Data Structures and Algorithms**: At this level, specific data structures to be used, algorithms to be followed, and the class design (in OOP) are defined. It involves decisions like whether to use an array or a linked list, or which sorting algorithm to use.

3. **Technology Specific**: LLD might include details specific to the chosen technologies, like database schema design, API endpoints definitions, or library-specific configurations.

4. **For Developers**: LLD is primarily for the developers who will be building the software. It gives them a clear picture of what needs to be coded and how.

5. **Detailed Diagrams**: LLD often includes class diagrams, sequence diagrams, state diagrams, and detailed pseudocode.

In summary, while HLD provides a bird's-eye view of the system, focusing on the "what", LLD dives deep into the "how", providing a roadmap for developers to build the system.

### S.O.L.I.D Principle

A set of design principles in object-oriented programming that, when followed properly, can lead to more understandable, flexible, and maintainable code. Let's break down each principle with a simple explanation and a JavaScript example.

### 1. **Single Responsibility Principle (SRP)**
A class should have one, and only one, reason to change. This means a class should only have one job or responsibility.

**Example:**
Instead of having a class that handles both user data and user data validation, you should separate them.

```javascript
// Bad
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    isValidAge() {
        return this.age >= 18;
    }
}

// Good
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class UserValidator {
    static isValidAge(user) {
        return user.age >= 18;
    }
}
```

### 2. **Open/Closed Principle (OCP)**
Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.

**Example:**
Instead of modifying an existing class to add new functionality, you should extend it.

```javascript
// Bad
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

// Good
class Shape {
    area() {
        throw new Error("Area method should be implemented in derived classes");
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}
```

### 3. **Liskov Substitution Principle (LSP)**
Objects of a superclass should be able to be replaced with objects of a subclass without affecting the correctness of the program.

**Example:**
All derived classes should be substitutable for their base class.

```javascript

// Wrong
class Bird {
    fly() {
        console.log("Flying...");
    }
}

class Ostrich extends Bird {
    fly() {
        throw new Error("Can't fly");
    }
}

// This might cause problems if we expect all birds to fly.
```

A better approach would be to have different types or interfaces for flying and non-flying birds.

```javascript
// Base class for all birds
class Bird {
    move() {
        console.log("Moving...");
    }
}

// Flying birds
class FlyingBird extends Bird {
    fly() {
        console.log("Flying...");
    }
}

// Non-flying birds
class NonFlyingBird extends Bird {
    walk() {
        console.log("Walking...");
    }
}

class Sparrow extends FlyingBird {
    // Additional behaviors specific to Sparrow
}

class Ostrich extends NonFlyingBird {
    // Additional behaviors specific to Ostrich
}

const bird1 = new Sparrow();
bird1.move();  // Outputs: Moving...
bird1.fly();   // Outputs: Flying...

const bird2 = new Ostrich();
bird2.move();  // Outputs: Moving...
bird2.walk();  // Outputs: Walking...


```

### 4. **Interface Segregation Principle (ISP)**
Clients should not be forced to depend on interfaces they do not use.

**Example:**
Instead of one large interface, split it into smaller and more specific interfaces.

```javascript
// Bad
class Worker {
    work() {}
    eat() {}
}

// Good
class Worker {
    work() {}
}

class Eater {
    eat() {}
}
```

### 5. **Dependency Inversion Principle (DIP)**
High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g., interfaces).

**Example:**
Instead of having high-level modules depend on low-level ones, use abstractions.

```javascript
// Step 1: Define Payment Interface
class PaymentInterface {
    processPayment(amount) {
        throw new Error("processPayment method not implemented");
    }
}

// Step 2: Implement Stripe and PayPal Classes

class StripePayment extends PaymentInterface {
    constructor(apiKey) {
        super();
        this.apiKey = apiKey;
    }

    processPayment(amount) {
        // Logic to process payment with Stripe
        console.log(`Processing ${amount} payment with Stripe using API key: ${this.apiKey}`);
    }
}

class PayPalPayment extends PaymentInterface {
    constructor(authToken) {
        super();
        this.authToken = authToken;
    }

    processPayment(amount) {
        // Logic to process payment with PayPal
        console.log(`Processing ${amount} payment with PayPal using Auth token: ${this.authToken}`);
    }
}

// Step 3: PaymentProcessor Class

class PaymentProcessor {
    constructor(paymentService) {
        if (!(paymentService instanceof PaymentInterface)) {
            throw new Error("Invalid payment service provided");
        }
        this.paymentService = paymentService;
    }

    makePayment(amount) {
        this.paymentService.processPayment(amount);
    }
}

// Usage:

const stripePaymentService = new StripePayment("YOUR_STRIPE_API_KEY");
const payPalPaymentService = new PayPalPayment("YOUR_PAYPAL_AUTH_TOKEN");

const stripeProcessor = new PaymentProcessor(stripePaymentService);
stripeProcessor.makePayment(100);  // Outputs: Processing 100 payment with Stripe using API key: YOUR_STRIPE_API_KEY

const payPalProcessor = new PaymentProcessor(payPalPaymentService);
payPalProcessor.makePayment(200);  // Outputs: Processing 200 payment with PayPal using Auth token: YOUR_PAYPAL_AUTH_TOKEN

```

By following the SOLID principles, you can ensure that your codebase remains clean, scalable, and easy to maintain.





## Test Driven Development

- Build with Confidence
- Clean Code
- Avoid code breaks and ship safe
- That itself acts as a proof that app works well

#### Test Frameworks

##### Jest
1. Unit Testing
2. Snapshot Testing
3. async
4. sync

##### Ava

## What should I know as Software Architect ?

As a tech product architect, it is crucial to have a broad and deep understanding of various technological domains. Apart from the areas you mentioned (event streaming, scalability, API design, system design, and database), here are some other important categories you should focus on:

1. **Cloud Computing and Services:**
   - Understand the services, architecture, and best practices of major cloud providers like AWS, Azure, and GCP.

2. **Machine Learning and AI:**
   - Stay updated with the latest advancements in AI and machine learning, and how they can be integrated into products.

3. **DevOps and CI/CD:**
   - Gain knowledge of continuous integration and delivery, automation tools, and DevOps culture.

4. **Cybersecurity:**
   - Understand the latest cybersecurity threats, and best practices to secure applications and data.

5. **Mobile Development:**
   - Familiarize yourself with the latest mobile development trends, tools, and platforms for both iOS and Android.

6. **Web Technologies:**
   - Stay updated with the latest web development technologies, frameworks, and best practices.

7. **Internet of Things (IoT):**
   - Understand the architecture, protocols, and challenges associated with IoT devices and systems.

8. **User Experience (UX) and Design Thinking:**
   - Gain knowledge of UX principles, design thinking, and how they impact product design.

9. **Agile and Project Management:**
   - Familiarize yourself with agile methodologies and project management tools and practices.

10. **Quality Assurance and Testing:**
    - Understand the importance of QA, testing methodologies, and tools to ensure product quality.

11. **Data Analytics and Visualization:**
    - Know how to analyze and visualize data to extract meaningful insights for product improvement.

12. **Blockchain and Cryptocurrencies:**
    - Explore blockchain technology and how it can be utilized in various applications, including cryptocurrencies.

13. **Augmented Reality (AR) and Virtual Reality (VR):**
    - Stay informed about AR and VR technologies and their potential use cases in products.

14. **Edge Computing:**
    - Understand the principles of edge computing and how it can be applied to process data closer to where it is generated.

15. **Networking and Communication Protocols:**
    - Gain knowledge of networking fundamentals and communication protocols used in different technologies.

16. **Performance Optimization:**
    - Learn about techniques and tools to optimize the performance of applications and systems.

17. **Regulatory Compliance and Ethics:**
    - Stay informed about the legal and ethical considerations relevant to your product domain.

18. **Cross-Platform Development:**
    - Understand the pros and cons of cross-platform development and the available tools and frameworks.

19. **Localization and Globalization:**
    - Learn how to adapt your product for different cultures and languages to reach a global audience.

20. **Product Lifecycle Management:**
    - Familiarize yourself with the stages of product development, from ideation to end-of-life, and best practices for each stage.

## Common Questions

How do you prove your solution is working ?

ANSWER : THE IMPLEMENTED SOLUTION

A software architect will typically showcase a combination of artifacts, demonstrations, and metrics to prove that a system is working as intended. Here are some of the items they might present:

1. **System Documentation and Design Artifacts:**
   - **Architecture Diagrams:** Visual representation of the system's components and their interactions.
   - **Design Patterns Used:** A description of the patterns used and why they were chosen.
   - **API Documentation:** Details on how different parts of the system communicate.
   - **Data Flow Diagrams:** Visualization of how data moves through the system.

2. **Working Demonstrations:**
   - **Prototype or MVP (Minimum Viable Product):** A basic version of the software that showcases its main features.
   - **Use Case Demos:** Specific scenarios in which the software is used to solve a given problem.
   - **Integration Demos:** Showing how the system works with other systems.

3. **Automated Test Results:**
   - **Unit Tests:** These test individual components of the system in isolation.
   - **Integration Tests:** Tests that ensure different parts of the system work together.
   - **System Tests:** Tests the system as a whole.
   - **Performance Tests:** Measures how the system performs under load.
   - **Security Tests:** Ensures the system is secure from various vulnerabilities.

4. **Metrics and Monitoring Dashboards:**
   - **Performance Metrics:** E.g., response times, throughput, and latency.
   - **Reliability Metrics:** E.g., uptime, mean time between failures (MTBF), and mean time to recovery (MTTR).
   - **Usage Metrics:** Data on how often certain features are used, user behavior, etc.
   - **Error and Exception Reports:** Details on errors that have occurred and how often they happen.

5. **Feedback from Stakeholders:**
   - **User Feedback:** Direct input from end-users on system functionality and usability.
   - **Stakeholder Reviews:** Feedback from project stakeholders, such as product owners, managers, or clients.

6. **Scalability and Load Testing Results:**
   - Details on how the system performs under increased load.
   - Potential bottlenecks and their solutions.

7. **Compliance and Certification:**
   - **Audit Reports:** Results from any external audits, especially for systems that need to adhere to specific regulations.
   - **Certifications:** E.g., ISO standards or industry-specific certifications that the software adheres to.

8. **Backup and Disaster Recovery Protocols:**
   - Demonstrations of backup procedures and how the system can be restored after a catastrophic event.
   - Documentation on disaster recovery plans and their testing results.

9. **Continuous Integration/Continuous Deployment (CI/CD) Pipelines:**
   - Demonstrations of how code changes are automatically tested and deployed to production.

10. **Cost and Resource Utilization Reports:**
   - Details on how resources (like CPU, memory, storage) are being used and the associated costs.

In essence, the combination of concrete evidence (like test results and metrics), demonstrations, and stakeholder feedback provides a comprehensive view of the system's health and functionality.


## MCQs


As a tech product architect, your role is to have a holistic understanding of various technologies and how they can be integrated to create a cohesive and successful product. Stay curious, keep learning, and always be open to new ideas and technologies.


### General and Behavioral Questions:
1. How did you become interested in software architecture?
2. What do you enjoy most about being a product architect?
3. Describe a challenging project you’ve worked on and how you approached it.
4. How do you handle disagreements or conflicts within your team?
5. How do you stay updated with industry trends and best practices?

### Technical Questions:
6. What programming languages are you most proficient in?
7. How do you approach choosing a technology stack for a project?
8. Explain the process of designing scalable software systems.
9. What are some common security vulnerabilities, and how do you mitigate them?
10. Describe a time you had to optimize a system for performance.

### Software Architecture Specific Questions:
11. What architectural patterns do you often use and why?
12. How do you balance flexibility and simplicity in your designs?
13. Describe a project where you had to make a significant architectural decision.
14. How do you handle data privacy concerns in your designs?
15. How do you approach API design and integration?

### Project Management and Collaboration:
16. How do you communicate architectural decisions to non-technical stakeholders?
17. What project management methodologies are you familiar with?
18. Describe a time you had to make a compromise due to project constraints.
19. How do you handle technical debt?
20. How do you ensure that a project stays within scope and on schedule?

### User Experience and UI Design:
21. How do you work with UI/UX designers to create a cohesive product?
22. Describe a time you had to make a trade-off between user experience and other project requirements.
23. How do you approach designing for different platforms and devices?
24. How do you gather and incorporate user feedback into your designs?
25. What tools do you use for prototyping and user testing?

### Security and Compliance:
26. How do you ensure compliance with data privacy laws?
27. What steps do you take to secure user data?
28. Describe a time you had to address a security vulnerability in a project.
29. How do you approach designing for regulatory compliance?
30. What experience do you have with cybersecurity best practices?

### Performance and Scalability:
31. How do you ensure a system can handle growth in users and data?
32. Describe a time you had to troubleshoot a performance issue.
33. What strategies do you use for database optimization?
34. How do you approach load testing and performance monitoring?
35. What tools do you use for performance profiling?

### Problem-solving and Decision-making:
36. Describe a time you had to make a tough architectural decision.
37. How do you handle uncertainty or lack of information when making decisions?
38. What is your approach to risk management in a project?
39. How do you prioritize features or requirements in a project?
40. Describe a time you had to solve a complex problem with a simple solution.

### Continuous Learning and Improvement:
41. How do you stay updated with new technologies and best practices?
42. Describe a time you learned a new skill or technology for a project.
43. How do you approach continuous improvement in your projects?
44. What challenges have you faced when adapting to new technologies or methodologies?
45. How do you foster a culture of learning and innovation in your team?

### Specific Technologies and Tools:
46. What experience do you have with cloud platforms like AWS, Azure, or GCP?
47. How do you approach mobile app architecture differently from web applications?
48. What tools do you use for version control and code collaboration?
49. What experience do you have with containerization and orchestration tools like Docker and Kubernetes?
50. How do you approach integrating AI or machine learning components into a project?



### Event Streaming:

11. **What is backpressure, and how do you handle it in streaming?**
    - Answer: Backpressure refers to the buildup of data when it is produced faster than it can be processed. It can be handled by buffering, dropping, or throttling incoming data.

12. **How do you handle processing stateful data in event streaming systems?**
    - Answer: By using stateful stream processing frameworks that provide built-in state management.

13. **Explain the use of windowing in stream processing.**
    - Answer: Windowing allows processing of data in specific time or count-based chunks, enabling aggregation and analysis of time-bound data.

14. **How would you implement error handling in a streaming pipeline?**
    - Answer: By using Dead Letter Queues (DLQs) to capture problematic messages or implementing retry policies with exponential backoff.

15. **What are the benefits and challenges of using event-driven architectures?**
    - Answer: Benefits include scalability, real-time processing, and flexibility; challenges include complexity, potential data inconsistency, and debugging difficulties.

16. **How do you manage cross-region data replication in event streaming platforms?**
    - Answer: By using built-in replication features of the streaming platform, or custom solutions with data partitioning and synchronization mechanisms.

17. **What is the role of a message broker in an event streaming system?**
    - Answer: A message broker facilitates communication between producers and consumers by receiving, storing, and forwarding messages to the appropriate consumers.

18. **How do you handle data compression and serialization in event streaming?**
    - Answer: By using serialization protocols like Avro or Protobuf and compression algorithms like gzip or Snappy.

19. **Explain the role of a producer and consumer in an event streaming platform.**
    - Answer: Producers send data to the streaming platform, while consumers retrieve and process that data.

20. **How do you secure data in transit in a streaming platform?**
    - Answer: By using encryption protocols such as TLS and ensuring secure authentication and authorization mechanisms.

### Scalability:

1. **What strategies do you use to handle peak loads in a system?**
   - Answer: Load balancing, horizontal scaling, and capacity planning.

2. **How do you design a database for scalability?**
   - Answer: Using sharding, replication, and optimized queries.

3. **What role does caching play in scalability?**
   - Answer: Caching reduces the load on the database and improves response times.

4. **How do you handle scalability in microservices architecture?**
   - Answer: By ensuring each microservice can be independently scaled and deploying them in containers or serverless environments.

5. **What is horizontal and vertical scaling?**
   - Answer: Horizontal scaling involves adding more machines, while vertical scaling involves adding more resources to a single machine.

6. **How do you ensure a scalable user authentication system?**
   - Answer: By using OAuth, OpenID Connect, and scalable user data stores.

7. **What challenges do you face when scaling a monolithic application?**
   - Answer: Challenges include difficulties in independent scaling, potential for codebase complexity, and increased deployment times.

8. **What is the role of load balancing in scalability?**
   - Answer: Load balancing distributes incoming traffic across multiple servers to prevent any single server from becoming a bottleneck.

9. **How do you approach data partitioning in a scalable system?**
   - Answer: By carefully analyzing the data access patterns and dividing the data into logical partitions.

10. **What strategies do you use to manage state in a scalable system?**
    - Answer: By using distributed cache, stateless design, and data synchronization.

11. **How do you ensure consistent performance as the user base grows?**
    - Answer: By regularly monitoring performance, optimizing code, and scaling resources accordingly.

12. **What is a CDN, and how does it contribute to scalability?**
    - Answer: A CDN (Content Delivery Network) distributes static content closer to the user, reducing load times and server load.

13. **How do you handle database transactions in a scalable system?**
    - Answer: By using distributed transactions, eventual consistency, or compensating transactions.

14. **What are some common bottlenecks in a scalable system, and how do you address them?**
    - Answer: Common bottlenecks include database, CPU, and network. Address them by optimization, scaling, and efficient resource management.

15. **How do you handle data consistency in a scalable system?**
    - Answer: By using distributed databases, consensus algorithms, or eventual consistency models.

16. **What challenges do you face when scaling a mobile application?**
    - Answer: Challenges include handling increased data traffic, maintaining a responsive UI, and managing device diversity.

17. **How do you approach capacity planning in a scalable system?**
    - Answer: By analyzing past data, predicting future load, and provisioning resources accordingly.

18. **What is auto-scaling, and how does it help in managing scalability?**
    - Answer: Auto-scaling automatically adjusts the number of resources based on the current demand, ensuring optimal performance and cost-efficiency.

19. **How do you handle session management in a scalable system?**
    - Answer: By using distributed session stores, stateless authentication tokens, or client-side session management.

20. **What challenges do you face when scaling a real-time communication system?**
    - Answer: Challenges include maintaining low latency, handling high message throughput, and ensuring reliable message delivery.



### API Design:

1. **How do you handle versioning in API design?**
   - Answer: Using URI versioning, custom request headers, or content negotiation.

2. **What are RESTful APIs, and what principles do they follow?**
   - Answer: RESTful APIs are based on REST principles like statelessness, client-server architecture, and representational state transfer.

3. **How do you ensure security in API design?**
   - Answer: By implementing OAuth, API keys, JWT, and HTTPS.

4. **What are some common challenges in API design and how do you address them?**
   - Answer: Challenges include versioning, security, and performance. Address them with proper planning, testing, and monitoring.

5. **How do you manage error handling in APIs?**
   - Answer: By using standardized HTTP status codes and providing clear error messages.

6. **What is the role of an API gateway in microservices architecture?**
   - Answer: API gateway acts as a reverse proxy, aggregating services and providing a single entry point for external consumers.

7. **What strategies do you use for API rate limiting and throttling?**
   - Answer: Implementing token bucket algorithms, API quotas, or third-party tools.

8. **How do you handle API documentation?**
   - Answer: By using tools like Swagger, Redoc, or Postman.

9. **What is GraphQL, and how does it differ from REST?**
   - Answer: GraphQL is a query language that allows clients to request specific data, whereas REST exposes fixed endpoints.

10. **How do you handle API caching?**
    - Answer: By using HTTP caching headers, CDN, or in-memory data stores.

11. **How do you ensure API reliability and availability?**
    - Answer: By using load balancing, failover strategies, and monitoring tools.

12. **What are some common API authentication and authorization mechanisms?**
    - Answer: OAuth, API keys, JWT, and OpenID Connect.

13. **How do you handle backward compatibility in API design?**
    - Answer: By maintaining old API versions, using deprecation warnings, and providing clear migration paths.

14. **What is an API contract, and how does it help in API development?**
    - Answer: An API contract defines the expectations between the client and server, ensuring consistent communication and easier testing.

15. **How do you approach API testing?**
    - Answer: By using unit testing, integration testing, and tools like Postman and Swagger.

16. **What is OpenAPI Specification, and how does it benefit API development?**
    - Answer: OpenAPI Specification is a standard for describing RESTful APIs, facilitating easier documentation, testing, and client generation.

17. **How do you handle API pagination?**
    - Answer: By implementing limit-offset, cursor-based, or keyset pagination.

18. **What are some common API design patterns?**
    - Answer: REST, GraphQL, gRPC, and SOAP.

19. **How do you approach designing APIs for mobile applications?**
    - Answer: By optimizing payload size, handling intermittent connectivity, and using versioning.

20. **What is the role of an API developer portal?**
    - Answer: A developer portal provides documentation, SDKs, and tools to help developers integrate with the API.

### System Design:

1. **How do you approach designing a system for high availability?**
   - Answer: By using redundancy, failover mechanisms, and distributed architectures.

2. **What are some common challenges in system design, and how do you address them?**
   - Answer: Challenges include scalability, reliability, and security. Address them by using best practices, testing, and monitoring.

3. **What is a microservices architecture, and how does it differ from monolithic architecture?**
   - Answer: Microservices architecture involves multiple small services communicating over a network, whereas monolithic architecture involves a single, large codebase.

4. **How do you handle data consistency in distributed systems?**
   - Answer: By using consensus algorithms, distributed transactions, or eventual consistency models.

5. **What are some common patterns for handling failures in distributed systems?**
   - Answer: Circuit breaker, retry with exponential backoff, and fallback mechanisms.

6. **What is a service mesh, and how does it help in system design?**
   - Answer: A service mesh is a configurable infrastructure layer that handles service communication, providing load balancing, authentication, and monitoring.

7. **How do you approach designing systems for fault tolerance?**
   - Answer: By identifying potential points of failure and implementing redundant components, backups, and failover mechanisms.

8. **What is the CAP theorem, and how does it impact system design?**
   - Answer: The CAP theorem states that a distributed system can only achieve two out of three: Consistency, Availability, and Partition Tolerance. It impacts decisions regarding data storage and processing.

9. **How do you handle cross-service communication in microservices architecture?**
   - Answer: By using APIs, message queues, or event streams.

10. **What is a domain-driven design, and how does it benefit system design?**
    - Answer: Domain-driven design is a methodology that focuses on the business domain and its logic, ensuring that the system aligns with business requirements.

11. **How do you approach designing scalable data pipelines?**
    - Answer: By using distributed computing frameworks, data partitioning, and efficient storage mechanisms.

12. **What are some common security considerations in system design?**
    - Answer: Data encryption, user authentication, and secure communication channels.

13. **How do you handle versioning in microservices architecture?**
    - Answer: By using semantic versioning, backward compatibility, or API gateways with version management.

14. **What is the role of a load balancer in system design?**
    - Answer: A load balancer distributes incoming traffic across multiple servers to ensure optimal resource utilization and prevent any single server from becoming a bottleneck.

15. **How do you approach designing systems for real-time processing?**
    - Answer: By using real-time processing frameworks, in-memory databases, and optimized algorithms.

16. **What is the role of a cache in system design?**
    - Answer: A cache stores frequently accessed data in a readily accessible location, reducing the load on the database and improving response times.

17. **How do you handle data replication in distributed systems?**
    - Answer: By using replication protocols, consensus algorithms, or eventual consistency models.

18. **What is the role of a database in system design?**
    - Answer: A database stores and retrieves data, providing a persistent storage solution for the system.

19. **How do you approach designing systems for multi-tenancy?**
    - Answer: By using separate databases, shared databases with separate schemas, or shared databases with shared schemas.

20. **What are some common performance considerations in system design?**
    - Answer: Load balancing, caching, database optimization, and efficient algorithms.

### Database:

1. **What are the differences between SQL and NoSQL databases?**
   - Answer: SQL databases are relational, ACID-compliant, and use structured data, whereas NoSQL databases are non-relational, may not be fully ACID-compliant, and can handle unstructured data.

2. **How do you handle indexing in a database?**
   - Answer: By creating indexes on columns that are frequently used in queries to improve query performance.

3. **What are some common database normalization forms?**
   - Answer: First normal form (1NF), second normal form (2NF), third normal form (3NF), and Boyce-Codd normal form (BCNF).

4. **What is a transaction in a database?**
   - Answer: A transaction is a sequence of one or more operations performed as a single logical unit of work, following the ACID properties.

5. **What is sharding in a database?**
   - Answer: Sharding involves dividing a large database into smaller, more manageable pieces, called shards, distributed across multiple servers.

6. **How do you handle backups in a database?**
   - Answer: By regularly performing full, incremental, and differential backups, and testing restores.

7. **What is a database view?**
   - Answer: A view is a virtual table that represents the result of a SELECT query.

8. **What are some common database security practices?**
   - Answer: Data encryption, access controls, and regular security audits.

9. **How do you handle data consistency in a database?**
   - Answer: By using transactions, constraints, and consistency checks.

10. **What is data warehousing?**
    - Answer: Data warehousing is the process of collecting, storing, and managing data from different sources in a central repository for analysis.

11. **What are some common database optimization techniques?**
    - Answer: Indexing, query optimization, and database partitioning.

12. **What is a database schema?**
    - Answer: A database schema is a blueprint that defines the structure of the database, including tables, columns, and relationships.

13. **How do you handle data replication in a database?**
    - Answer: By using replication protocols, master-slave configurations, or multi-master configurations.

14. **What is a database management system (DBMS)?**
    - Answer: A DBMS is software that manages databases, providing a user interface and tools for data manipulation and administration.

15. **How do you approach designing a database for a specific application?**
    - Answer: By analyzing the application's data requirements, relationships, and access patterns, and creating a schema that supports them.

16. **What are some common types of NoSQL databases?**
    - Answer: Document databases, key-value stores, wide-column stores, and graph databases.

17. **How do you handle data migration in a database?**
    - Answer: By planning the migration carefully, testing the process, and ensuring data integrity throughout the process.

18. **What is a stored procedure in a database?**
    - Answer: A stored procedure is a precompiled collection of SQL statements that can be executed as a single unit.

19. **What are some common database backup strategies?**
    - Answer: Full backups, incremental backups, differential backups, and continuous backups.

20. **What is data normalization, and why is it important?**
    - Answer: Data normalization is the process of organizing data to reduce redundancy and improve data integrity. It is important to ensure consistent and efficient data access.



### Cloud Computing and Services:

1. **What are the main services offered by AWS, Azure, and GCP?**
   - Answer: AWS offers EC2, S3, RDS, etc.; Azure offers Virtual Machines, Blob Storage, SQL Database, etc.; GCP offers Compute Engine, Cloud Storage, Cloud SQL, etc.
   
2. **How does cloud scalability work?**
   - Answer: Cloud scalability refers to the ability to increase or decrease resources and services according to demand.
   
3. **What are the benefits of using cloud computing?**
   - Answer: Scalability, cost-effectiveness, flexibility, and reliability.
   
4. **What is the difference between IaaS, PaaS, and SaaS?**
   - Answer: IaaS provides infrastructure, PaaS provides a platform and tools, and SaaS provides software as a service.
   
5. **How do you ensure data security in the cloud?**
   - Answer: Encryption, access controls, and regular security audits.
   
6. **What is cloud orchestration?**
   - Answer: Cloud orchestration automates the arrangement, coordination, and management of cloud services.
   
7. **How does cloud disaster recovery work?**
   - Answer: Data is backed up in the cloud and can be restored in the event of a disaster.
   
8. **What is a virtual private cloud (VPC)?**
   - Answer: A VPC is a private network within a public cloud that allows users to launch resources in a virtual network.
   
9. **How do you choose the right cloud service provider?**
   - Answer: Consider factors such as cost, services offered, security, and compliance.
   
10. **What is multi-cloud architecture?**
    - Answer: Multi-cloud architecture uses multiple cloud computing services from different providers.
   
11. **What is serverless computing?**
    - Answer: Serverless computing allows developers to build and run applications without managing servers.
   
12. **How does cloud storage work?**
    - Answer: Cloud storage stores data on remote servers that can be accessed over the internet.
   
13. **What is a content delivery network (CDN)?**
    - Answer: A CDN is a network of servers that delivers content to users based on their geographic location.
   
14. **What are some common cloud migration strategies?**
    - Answer: Rehosting, replatforming, refactoring, and rebuilding.
   
15. **What is cloud elasticity?**
    - Answer: Cloud elasticity allows resources to be scaled up or down as needed.
   
16. **What is a hybrid cloud?**
    - Answer: A hybrid cloud combines public and private clouds to share data and applications.
   
17. **How does load balancing work in the cloud?**
    - Answer: Load balancing distributes incoming traffic across multiple servers to ensure optimal resource utilization.
   
18. **What are cloud regions and zones?**
    - Answer: Cloud regions are geographic locations where cloud services are hosted, and zones are isolated locations within a region.
   
19. **How does cloud automation work?**
    - Answer: Cloud automation uses software and tools to automate the management of cloud services.
   
20. **What is a cloud-native application?**
    - Answer: A cloud-native application is designed to run in a cloud environment, taking full advantage of cloud resources.

### Machine Learning and AI:

1. **What is the difference between AI and machine learning?**
   - Answer: AI is a broad concept of machines mimicking human intelligence, while machine learning is a subset of AI that focuses on data analysis and algorithms to enable learning.
   
2. **What is supervised learning?**
   - Answer: Supervised learning is a type of machine learning where the model is trained on labeled data.
   
3. **What are some common machine learning algorithms?**
   - Answer: Linear regression, decision trees, k-nearest neighbors, support vector machines, etc.
   
4. **How does a neural network work?**
   - Answer: A neural network is a set of algorithms designed to recognize patterns by interpreting data through layers of nodes (neurons).
   
5. **What is deep learning?**
   - Answer: Deep learning is a subfield of machine learning that uses neural networks with multiple layers (deep neural networks) to analyze complex patterns in data.
   
6. **What is natural language processing (NLP)?**
   - Answer: NLP is a field of AI that focuses on the interaction between computers and humans using natural language.
   
7. **What is reinforcement learning?**
   - Answer: Reinforcement learning is a type of machine learning where an agent learns to make decisions by interacting with an environment and receiving rewards or penalties.
   
8. **What is a decision tree?**
   - Answer: A decision tree is a machine learning algorithm used for classification and regression that splits data into branches to make decisions.
   
9. **What are some common challenges in machine learning?**
   - Answer: Overfitting, underfitting, lack of data, data quality, and model interpretability.
   
10. **What is a support vector machine?**
    - Answer: A support vector machine is a supervised learning model used for classification and regression analysis.
   
11. **How does an unsupervised learning algorithm work?**
    - Answer: Unsupervised learning algorithms analyze and model data that hasn't been labeled or classified, identifying patterns and relationships.
   
12. **What is feature engineering?**
    - Answer: Feature engineering is the process of selecting, modifying, or creating features to improve the performance of machine learning models.
   
13. **What is data preprocessing in machine learning?**
    - Answer: Data preprocessing involves cleaning, transforming, and organizing raw data into a format suitable for machine learning algorithms.
   
14. **What is a random forest?**
    - Answer: A random forest is an ensemble learning method that builds multiple decision trees and merges them to produce a more accurate and stable prediction.
   
15. **What is model evaluation in machine learning?**
    - Answer: Model evaluation assesses the performance of a machine learning model using metrics like accuracy, precision, recall, F1 score, etc.
   
16. **What is cross-validation?**
    - Answer: Cross-validation is a technique used to assess the performance of a model by splitting the data into training and testing sets multiple times.
   
17. **What is k-means clustering?**
    - Answer: k-means clustering is a type of unsupervised learning algorithm used to partition data into k clusters based on similarity.
   
18. **What is a convolutional neural network (CNN)?**
    - Answer: A CNN is a type of neural network used for image recognition and processing, with layers specifically designed to detect patterns in images.
   
19. **What is a recurrent neural network (RNN)?**
    - Answer: An RNN is a type of neural network designed to handle sequential data, with loops to allow information persistence.
   
20. **What are some applications of AI and machine learning in various industries?**
    - Answer: Healthcare (predictive analytics), finance (fraud detection), retail (recommendation systems), and more.

### DevOps and CI/CD:

1. **What is DevOps?**
   - Answer: DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) aiming to shorten the systems development life cycle and provide continuous delivery.

2. **Explain the concept of CI/CD.**
   - Answer: Continuous Integration (CI) is the practice of frequently merging code changes, while Continuous Delivery (CD) is the automated process of delivering that code to production environments.

3. **What are some popular DevOps tools?**
   - Answer: Jenkins, Docker, Kubernetes, Ansible, Terraform, Git, and more.

4. **How does microservices architecture fit into DevOps?**
   - Answer: Microservices architecture aligns well with DevOps because it allows for independent deployment, scaling, and management of small, self-contained services.

5. **What is infrastructure as code (IaC)?**
   - Answer: IaC is the process of managing and provisioning infrastructure through machine-readable scripts or code, rather than manual processes.

6. **What is containerization in DevOps?**
   - Answer: Containerization involves encapsulating an application and its dependencies into a container that can run on any computing environment.

7. **What is the role of monitoring and logging in DevOps?**
   - Answer: Monitoring and logging provide insight into application performance and help identify and troubleshoot issues.

8. **How does a DevOps culture improve collaboration?**
   - Answer: DevOps culture promotes collaboration between development and operations teams, improving communication, and breaking down silos.

9. **What is a build pipeline in CI/CD?**
   - Answer: A build pipeline automates the process of compiling, testing, and deploying code.

10. **What are some security practices in DevOps?**
    - Answer: Implementing security scans, automated testing, and continuous monitoring are essential security practices in DevOps.

11. **Explain the concept of a deployment pipeline.**
    - Answer: A deployment pipeline is a set of automated processes that deliver software from development to production environments.

12. **What is the role of automated testing in CI/CD?**
    - Answer: Automated testing ensures that code changes do not introduce new defects and that the application functions as expected.

13. **What is a rollback in deployment?**
    - Answer: A rollback is the process of reverting to a previous version of an application if a new release introduces defects or issues.

14. **What is blue-green deployment?**
    - Answer: Blue-green deployment is a strategy that involves running two production environments, only one of which serves live production traffic.

15. **What are some best practices for managing configuration in DevOps?**
    - Answer: Use configuration management tools, version control, and environment-specific configurations.

16. **How does serverless computing fit into DevOps?**
    - Answer: Serverless computing complements DevOps by allowing developers to focus on code, while the cloud provider handles the infrastructure.

17. **What are some challenges in implementing DevOps?**
    - Answer: Cultural shift, tool integration, and security are some common challenges in DevOps implementation.

18. **How does DevOps contribute to business value?**
    - Answer: DevOps improves efficiency, enhances collaboration, and accelerates time-to-market, contributing to business value.

19. **What is the difference between DevOps and Agile?**
    - Answer: Agile focuses on iterative development and collaboration, while DevOps focuses on the end-to-end software delivery process, incorporating IT operations.

20. **What are some key metrics in DevOps?**
    - Answer: Deployment frequency, lead time, change fail rate, and mean time to recovery are key DevOps metrics.

### API Design:

1. **What are the core principles of RESTful API design?**
   - Answer: Stateless, client-server architecture, cacheable, uniform interface, layered system, and code on demand.
   
2. **What is the difference between REST and GraphQL?**
   - Answer: REST has multiple endpoints for different data, while GraphQL has a single endpoint that handles queries for specific data.
   
3. **How do you handle versioning in API design?**
   - Answer: Versioning can be handled through the URL, request headers, or query parameters.
   
4. **What is API throttling?**
   - Answer: API throttling limits the number of API requests a user can make in a specific time frame to prevent abuse or overuse of the API.
   
5. **What are some common API authentication methods?**
   - Answer: API keys, OAuth, and JWT are common methods for API authentication.
   
6. **How do you handle errors in API design?**
   - Answer: Use HTTP status codes and provide meaningful error messages in the response body.
   
7. **What is the difference between SOAP and REST?**
   - Answer: SOAP is a protocol with strict standards, while REST is an architectural style with more flexibility.
   
8. **What is an API gateway?**
   - Answer: An API gateway is a server that acts as an API front-end, receiving API requests, enforcing throttling and security policies, and passing requests to back-end services.
   
9. **What is Swagger (OpenAPI)?**
   - Answer: Swagger (OpenAPI) is a specification for building APIs that allows for easy documentation and generation of client SDKs.
   
10. **How do you handle pagination in API design?**
    - Answer: Pagination can be handled using query parameters like `offset` and `limit` or `page` and `pageSize`.
   
11. **What is the importance of rate limiting in API design?**
    - Answer: Rate limiting protects the API from being overloaded with requests and ensures fair usage among clients.
   
12. **How do you secure APIs?**
    - Answer: Use HTTPS, authentication, and authorization, and implement input validation and output encoding to secure APIs.
   
13. **What are the benefits of using API management tools?**
    - Answer: API management tools help to monitor, analyze, and secure APIs, and can also provide features like documentation and analytics.
   
14. **What is a webhook?**
    - Answer: A webhook is a way for an API to provide real-time data to other applications through HTTP POST requests.
   
15. **What is a microservices architecture, and how does it relate to API design?**
    - Answer: Microservices architecture involves building an application as a set of small, independent services that communicate through APIs.
   
16. **How do you handle file uploads in API design?**
    - Answer: File uploads can be handled using `multipart/form-data` encoding in HTTP requests.
   
17. **What are some best practices for API documentation?**
    - Answer: Use clear and concise language, provide examples, and keep the documentation up-to-date.
   
18. **What is OAuth?**
    - Answer: OAuth is an open standard for authorization that allows clients to access resources on behalf of the user.
   
19. **What is the difference between an API and a SDK?**
    - Answer: An API is a set of rules for how software components should interact, while a SDK is a collection of tools and libraries for building software.
   
20. **How do you handle caching in API design?**
    - Answer: Caching can be implemented using HTTP headers like `Cache-Control` and `Expires` to define caching rules.

### System Design:

1. **What is system design?**
   - Answer: System design is the process of defining the architecture, components, and data of a system to satisfy specified requirements.

2. **What are the key considerations in system design?**
   - Answer: Scalability, reliability, availability, maintainability, performance, and security.

3. **What is the difference between high-level and low-level design?**
   - Answer: High-level design outlines the system's main components and their relationships, while low-level design provides a detailed view of each component.

4. **How do you handle scalability in system design?**
   - Answer: Use load balancing, caching, database optimization, and horizontal scaling.

5. **What is a load balancer?**
   - Answer: A load balancer distributes incoming network traffic across multiple servers to ensure no single server is overwhelmed.

6. **How do you design for fault tolerance?**
   - Answer: Implement redundancy, backups, and monitoring to handle system failures gracefully.

7. **What is a Content Delivery Network (CDN)?**
   - Answer: A CDN is a network of servers distributed worldwide to deliver web content faster by serving it from the closest server to the user.

8. **What is the CAP theorem?**
   - Answer: The CAP theorem states that a distributed database system can provide at most two out of the three: Consistency, Availability, and Partition Tolerance.

9. **What is microservices architecture?**
   - Answer: A microservices architecture breaks down an application into small, independent services that communicate through APIs.

10. **How do you handle security in system design?**
    - Answer: Implement secure communication, access controls, encryption, and regular security audits.

11. **What is data partitioning?**
    - Answer: Data partitioning is the process of dividing a database into smaller, more manageable parts while ensuring data integrity.

12. **How do you manage data consistency in a distributed system?**
    - Answer: Use protocols like two-phase commit or eventual consistency, depending on the system's requirements.

13. **What is an API gateway?**
    - Answer: An API gateway is a server that acts as an API front-end, managing and routing requests to various microservices.

14. **What is eventual consistency?**
    - Answer: Eventual consistency is a consistency model used in distributed systems where updates are propagated to all nodes eventually, not necessarily immediately.

15. **How do you handle monitoring and logging in system design?**
    - Answer: Implement centralized logging and monitoring tools to collect and analyze system performance and error logs.

16. **What is sharding?**
    - Answer: Sharding is a database architecture technique that involves splitting a large database into smaller, more manageable parts called shards.

17. **What is a reverse proxy?**
    - Answer: A reverse proxy receives client requests and forwards them to the appropriate server, providing an additional layer of abstraction and control.

18. **What are some common design patterns used in system design?**
    - Answer: Singleton, Factory, Observer, Strategy, and Proxy are some common design patterns.

19. **How do you handle data backup and recovery in system design?**
    - Answer: Implement regular backups, replication, and a disaster recovery plan to protect data.

20. **What is a message queue?**
    - Answer: A message queue is a communication method used in distributed systems to process messages in a decoupled manner.

### Database Design:

1. **What is normalization in database design?**
   - Answer: Normalization is the process of organizing data to reduce redundancy and improve data integrity.
   
2. **What are the different normal forms in database design?**
   - Answer: There are five normal forms, each addressing different types of redundancy and anomalies.
   
3. **What is denormalization, and when should it be used?**
   - Answer: Denormalization is the process of introducing redundancy to improve query performance; it should be used cautiously, balancing performance with data integrity.
   
4. **What is the difference between SQL and NoSQL databases?**
   - Answer: SQL databases are relational, while NoSQL databases can be document-oriented, key-value, wide-column, or graph databases.
   
5. **How do you design an indexing strategy for a database?**
   - Answer: Identify frequently queried columns and create indexes on them, considering the trade-off between query performance and insert/update performance.
   
6. **What is a primary key?**
   - Answer: A primary key is a unique identifier for a record in a database table.
   
7. **What is a foreign key?**
   - Answer: A foreign key is a column or group of columns in a database table that refers to the primary key of another table.
   
8. **What is a stored procedure?**
   - Answer: A stored procedure is a precompiled collection of SQL statements and optional control-flow statements stored in the database.
   
9. **What is ACID in database design?**
   - Answer: ACID stands for Atomicity, Consistency, Isolation, and Durability, essential properties for reliable database transactions.
   
10. **What is sharding in database design?**
    - Answer: Sharding is the practice of splitting a large database into smaller, more manageable parts, or shards, spread across multiple servers.
   
11. **What is data warehousing?**
    - Answer: Data warehousing is the process of collecting, storing, and managing data from different sources in a central repository for analysis and reporting.
   
12. **How do you handle security in database design?**
    - Answer: Implement access controls, data encryption, and regular security audits to protect data.
   
13. **What is a join in SQL?**
    - Answer: A join in SQL is a clause used to combine rows from two or more tables based on a related column between them.
   
14. **What is data mining?**
    - Answer: Data mining is the process of analyzing large datasets to discover patterns, relationships, and trends.
   
15. **What is the difference between a view and a table in SQL?**
    - Answer: A view is a virtual table representing the result of a SELECT query, while a table stores actual data.
   
16. **How do you optimize database queries?**
    - Answer: Use indexing, avoid SELECT *, write efficient JOINs, and use proper filtering.
   
17. **What is a transaction in a database?**
    - Answer: A transaction is a sequence of one or more SQL operations executed as a single unit of work.
   
18. **What is database replication?**
    - Answer: Database replication is the process of copying data from one database to another to improve availability and load balancing.
   
19. **What is a graph database?**
    - Answer: A graph database uses graph structures with nodes, edges, and properties to represent and store data.
   
20. **What is a composite key?**
    - Answer: A composite key is a primary key composed of two or more columns used to uniquely identify a record.



## Document Structure

Document Architecture ( Center of Architect's Work )

1. Background
- For Team and Management
- Briefly disucss from business point of the view

Why ?
- Helps to validate the idea / requirement

2. Requirements
- Functional
- Non Functional ( Performance, Load, Data Volume, SLA )

Why ?
- Validate the understanding of requirements

3. Executive Summary ( Exes, QA, C Level, Project Manager )
- For Non Technical Summary
- 

Why ?
- Making the management confident about the work
- Boost the condient of your work
- Low Technical Document
- Understand and write from their point of view
- Use Charts and Diagrams
- Do not repeat yourself

4. Architecure Overview ( High Level Overview , Upto 10 Pages, Development and QA Lead )
- Provide high level overview
- Presents the architecture to team
- No deep dive innto specific components

- Type ( Web, Microservice, REST API )
- NF Requirements ( Eg, 100 Req, Sec)
- High Level Diagram ( Datastore, Interactions )

5. Components ( Core of Arch, Tech, Development Team )
- Component Role
- Technology Stack
    - Database
    - Frontend
    - Backend
    - Services
- Component Architecture
    - Describe the APIs
    - Describe the Layers
    - Dependency Injection
    - Use visualisations and detailing
- Development Instruction
    - Usage of Specific library
    - Suggest to document APIs
    - Dos and Dont's



6. Executive Summary
