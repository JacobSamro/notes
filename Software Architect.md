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
        throw new Error("Ostrich can't fly");
    }
}

// This might cause problems if we expect all birds to fly.
```

A better approach would be to have a common move function for all Birds.

```javascript
// Base class for all birds
class Bird {
    move() {
        console.log("Moving...");
    }
}

// Flying bird
class Sparrow extends Bird {
    move() {
        console.log("Flying...");
    }
}

// Non-flying bird
class Ostrich extends Bird {
    move() {
        console.log("Walking...");
    }
}

// make birds move
const bird1 = new Sparrow();
bird1.move();  // Outputs: Flying...

const bird2 = new Ostrich();
bird2.move();  // Outputs: Walking...


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
