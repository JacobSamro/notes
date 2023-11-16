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





2. MySQL
- Cartesian Product
- DATEDIFF
- HAVING

1. What is Cardinality in index ?
2. Why = NULL and IS NULL shows different results ?

#### MCQs - MySQL

3. Redis

#### MCQs - Redis

4. PostgresSQL

#### MCQs - PostGres

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

#### MCQs - MongoDB