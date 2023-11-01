## Databases


### Kafka

How do you improve the throughput of Apache Kafka ?

Improving the throughput of Apache Kafka is a common objective when dealing with large-scale, high-velocity data streams. Here are several strategies and best practices to consider:

1. **Increase the Number of Partitions**:
   - Each Kafka topic is divided into partitions, which can be processed in parallel. By increasing the number of partitions, you can scale out your consumers to process more messages simultaneously.
   
2. **Tune Producer Settings**:
   - Use the `batch.size` and `linger.ms` settings to group more records into a single batch, reducing the overhead per message.
   - Enable compression (e.g., `compression.type=snappy` or `lz4`). This reduces the amount of data sent over the network, at the cost of some CPU overhead.

3. **Tune Consumer Settings**:
   - Increase `fetch.min.bytes` to make the consumer wait for a larger amount of data before fetching, reducing the number of fetch requests.
   - Adjust `max.poll.records` to control the maximum number of records retrieved per poll.

4. **Optimize Broker Configuration**:
   - Adjust `num.network.threads` and `num.io.threads` based on the number of clients and the rate of requests.
   - Increase `socket.send.buffer.bytes` and `socket.receive.buffer.bytes` to allow for larger network buffers.

5. **Use Fast Storage**:
   - Kafka relies heavily on the filesystem for storing and caching messages. Make sure that the brokers are using fast disks, such as SSDs.
   - Also, monitor disk I/O and ensure that Kafka isn't bottlenecked by disk performance.

6. **Monitor and Adjust JVM Settings**:
   - Monitor garbage collection times. If you see long GC pauses, consider adjusting the JVM memory settings or switching to a different GC algorithm.

7. **Use Dedicated Machines**:
   - Avoid running other resource-intensive applications on the same machines as your Kafka brokers.

8. **Network Configuration**:
   - Ensure that the network between producers, brokers, and consumers is not a bottleneck. Use monitoring tools to check for network congestion.
   - Consider using a dedicated network or VLAN for Kafka traffic.

9. **Review Topic and Message Design**:
   - Keep message sizes consistent and avoid very large messages if possible.
   - Consider the trade-offs between having many small topics vs. fewer large topics.

10. **Upgrade Kafka**:
   - Newer versions of Kafka often come with performance improvements and optimizations. Stay updated with the latest stable releases.

11. **Monitoring & Metrics**:
   - Regularly monitor broker, producer, and consumer metrics to identify bottlenecks or performance regressions.
   - Tools like JMX or Kafka's built-in metrics can be invaluable in this regard.

12. **Replication**:
   - While replication is essential for data durability and high availability, it can also impact throughput. Adjust the replication factor based on your needs, but ensure you maintain enough replicas for fault tolerance.

13. **Avoid Frequent Log Segment Rolling**:
   - Adjust `log.segment.bytes` and `log.roll.ms` to avoid frequent log segment rotations, which can impact performance.

14. **Use Native Libraries**:
   - Some compression libraries have native implementations that can be faster than their Java counterparts. Ensure that the native libraries are installed and available on your brokers.


#### MCQs - Kafka


1. **What is Apache Kafka?**
   - Kafka is a distributed publish-subscribe messaging system that aims to provide high-throughput, fault-tolerance, and low-latency real-time data streaming.

2. **What are the core components of Kafka?**
   - Producer, Consumer, Broker, Topic, Partition, and Zookeeper.

3. **What is a Kafka topic?**
   - A topic is a category/feed name to which records are stored and published.

4. **What is a partition in Kafka?**
   - A partition is a smaller subset of data within a topic, allowing Kafka to horizontally scale as each partition can be hosted on a different server.

5. **Why is Kafka often referred to as distributed?**
   - Kafka has a cluster-centric design that tolerates machine failures without data loss. Its topics can be partitioned and replicated across multiple nodes.

6. **What is the role of Zookeeper in Kafka?**
   - Zookeeper is used for managing broker metadata, leader election, and keeping track of node failures. It helps in maintaining the distributed nature of Kafka.

7. **What are Kafka Producers and Consumers?**
   - Producers push data to topics. Consumers read data from topics.

8. **What is a Kafka Broker?**
   - A broker is a Kafka server that stores data and serves client requests. A Kafka cluster is made up of multiple broker instances.

9. **What is Replication in Kafka? Why is it important?**
   - Replication ensures data durability and availability. If one broker fails, data is still available on a replica broker.

10. **What is a Leader and a Follower in Kafka?**
   - For each partition, one broker serves as the leader, handling all reads/writes, while the others are followers that replicate the data.

11. **How does Kafka handle failover?**
   - In case a broker fails, the leadership of its partitions transfers to other brokers. Consumers and Producers then automatically adjust to the new broker.

12. **What is an Offset in Kafka?**
   - Offset is a unique ID assigned to each record as it gets written into a partition, indicating the position of the record.

13. **What is Kafka's Log compaction feature?**
   - It's a feature where Kafka will retain only the last update for a particular key in a topic, removing older records, thus saving storage.

14. **How can you secure Kafka?**
   - Using SSL for communication, SASL for authentication, and ACLs for authorization.

15. **What is the maximum size of a message in Kafka?**
   - By default, it's 1MB, but it can be increased by changing the `message.max.bytes` configuration.

16. **What is a Consumer Group in Kafka?**
   - A Consumer Group comprises multiple consumers that can read in parallel from a topic, with each consumer reading from a unique partition.

17. **How does Kafka ensure exactly-once processing?**
   - With the introduction of idempotent producers, transactions, and exactly-once semantics in Kafka 0.11, it can ensure messages are delivered exactly once.

18. **Can Kafka be used without Zookeeper?**
   - As of my last update in 2022, Kafka relied on Zookeeper. However, there have been discussions in the Kafka community about removing this dependency in the future.

19. **What is the difference between a Kafka topic and Kafka partition?**
   - A topic is a logical channel to which messages are sent by producers. A partition is a physical division of a topic for scalability and parallel processing.

20. **Why might one increase the number of partitions in a topic?**
   - To scale out and allow more consumers to read in parallel.

21. **How do you handle schema evolution in Kafka?**
   - Tools like Confluent's Schema Registry and the use of Avro format can help manage schema changes without breaking consumers.

22. **What's the difference between the `commitSync` and `commitAsync` methods in Kafka?**
   - `commitSync` blocks until the broker responds or it times out, ensuring offsets are committed. `commitAsync` sends an offset commit request and returns immediately.

23. **Why do we need multiple replicas of a Kafka topic?**
   - For data redundancy, fault tolerance, and higher data availability.

24. **What is a Kafka Streams?**
   - It's a library for building real-time data processing applications, ensuring fault-tolerance, scalability, and elasticity.

25. **What is a KSQL?**
   - KSQL is a streaming SQL engine for Kafka, allowing for real-time data processing and querying.

26. **What are the challenges of using Kafka at scale?**
   - Some challenges include data balancing, ensuring order, managing large numbers of topics and partitions, monitoring, and tuning for performance.

27. **What is backpressure in Kafka?**
   - It's a mechanism where consumers can slow down if they can't keep up with the rate of incoming messages, ensuring system stability.

28. **How is Kafka different from traditional messaging systems like RabbitMQ or ActiveMQ?**
   - Kafka is designed for high-throughput, fault-tolerance, and distributed data streaming, whereas traditional messaging systems are more focused on message routing and delivery guarantees.

29. **What are the differences between at-least-once, at-most-once, and exactly-once semantics?**
   - At-least-once: Messages are guaranteed to be delivered, but may be delivered more than once. 
   - At-most-once: Messages are delivered once or not at all.
   - Exactly-once: Messages are delivered once and only once.

30. **What is a Kafka Connector?**
   - It's a reusable producer or consumer that connects Kafka topics to existing applications or data systems.

31. **What are the types of Kafka Connectors?**
   - Source connectors (import data into Kafka) and Sink connectors (export data out of Kafka).

32. **How do you troubleshoot slow Kafka message consumption?**
   - By checking consumer lag, monitoring system resources, reviewing configurations, and ensuring appropriate partitioning.

33. **What is `ISR` in Kafka?**
   - In-Sync Replicas: The set of replica partitions that are synchronized with the leader partition.

34. **How do you ensure order in Kafka?**
   - By using a single partition for a topic, as Kafka guarantees order within a partition. However, this comes at the cost of parallel processing.

35. **What is a Sticky Partitioner?**
   - It's a partitioning strategy introduced in Kafka to reduce unnecessary partition shuffling, enhancing producer performance.

36. **What is the significance of `acks` in Kafka?**
   - It determines the number of acknowledgments the producer requires the broker to receive before considering a message sent.

37. **What are Window operations in Kafka Streams?**
   - Operations that deal with data within a specific time frame or window, e.g., computing aggregates on the last 5 minutes of data.

38. **How do you handle versioning in Kafka messages?**
   - By using Avro schemas with a Schema Registry, allowing for backward and forward compatibility.

39. **What's the purpose of the `__consumer_offsets` topic in Kafka?**
   - It's a special topic where consumer offsets (positions in the topic they're reading from) are stored.

40. **What is the impact of setting a high value for `fetch.max.bytes` in a Kafka consumer?**
   - It specifies the maximum amount of data the server should return on a fetch request. A very high value might cause a spike in memory usage and increase the time between successive fetch requests, potentially introducing lag.

41. **What happens when a Kafka broker goes down?**
   - If a broker goes down, partitions for which the broker was a leader will elect a new leader from among the ISR (In-Sync Replicas). Consumers and producers connected to that broker will also detect the failure and connect to a different broker.

42. **Can you delete older data in Kafka? If so, how?**
   - Yes, using topic-level retention settings, either based on time (`log.retention.hours`) or size (`log.retention.bytes`). Additionally, Kafka supports log compaction which retains only the latest record for a given key.

43. **What is the importance of the `key` in a Kafka message?**
   - The key is often used for partitioning messages in a topic. Messages with the same key will end up in the same partition, ensuring order for that key.

44. **How do you handle schema changes in Kafka?**
   - Using Avro combined with a Schema Registry helps handle and version schema changes. This allows backward and forward compatibility between producers and consumers.

45. **What's the difference between a Kafka Stream and a Kafka Table in Kafka Streams API?**
   - A Kafka Stream is a flow of records, whereas a Kafka Table represents a series of updates, where each update is a new version of a particular record.

46. **How can you rebalance partitions among brokers?**
   - By using the Kafka tool `kafka-reassign-partitions`. This tool can be used to move topic partitions across brokers.

47. **How do you control the frequency of commits in Kafka consumers?**
   - By using the `auto.commit.interval.ms` configuration. It sets the interval between auto-commits of offsets.

48. **What is a "dirty read" in Kafka Streams?**
   - It refers to reading data that might not have been committed. Kafka Streams allows applications to read their own writes before they are committed, which can be viewed as a "dirty read".

49. **How does Kafka ensure durability of messages?**
   - Messages in Kafka are written to disk and replicated across multiple brokers. This ensures data durability even if brokers fail.

50. **What is a MirrorMaker in Kafka?**
   - MirrorMaker is a utility provided with Kafka to replicate data between two Kafka clusters.



2. MySQL
- Cartesian Product
- DATEDIFF
- HAVING

3. Redis

4. PostgresSQL

1. MySQL vs NoSQL
- 
- 
- 
2. 

Advantages over MySQL
- More Advanced data types like JSON,JSONB
- NoSQL Support ( TODO)
- Extend and create own data type
- Extensions support ( such as PostGIS )
- Cross DB Queries
- Open Source License

5. MongoDB