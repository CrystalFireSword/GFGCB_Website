
export type AdventDay = {
  day: number;
  title: string;
  explanation: string;
};

export const adventCalendarData: AdventDay[] = [
  { day: 1, title: 'Big O Notation', explanation: 'A way to describe the performance or complexity of an algorithm as the input size grows.' },
  { day: 2, title: 'Arrays', explanation: 'A collection of items stored at contiguous memory locations.' },
  { day: 3, title: 'Linked Lists', explanation: 'A linear data structure where elements are not stored at contiguous memory locations, but linked using pointers.' },
  { day: 4, title: 'Stacks', explanation: 'A LIFO (Last-In, First-Out) data structure. Think of a stack of plates.' },
  { day: 5, title: 'Queues', explanation: 'A FIFO (First-In, First-Out) data structure. Like a queue of people waiting.' },
  { day: 6, title: 'Hash Tables', explanation: 'A data structure that implements an associative array abstract data type, a structure that can map keys to values.' },
  { day: 7, title: 'Binary Search', explanation: 'An efficient algorithm for finding an item from a sorted list of items.' },
  { day: 8, title: 'Recursion', explanation: 'A method of solving a problem where the solution depends on solutions to smaller instances of the same problem.' },
  { day: 9, title: 'Trees', explanation: 'A hierarchical data structure with a root value and subtrees of children with a parent node.' },
  { day: 10, title: 'Binary Search Trees', explanation: 'A node-based binary tree data structure which has the right subtree nodes greater than the node and left subtree nodes less than the node.' },
  { day: 11, title: 'Graphs', explanation: 'A non-linear data structure consisting of nodes and edges.' },
  { day: 12, title: 'Breadth-First Search (BFS)', explanation: 'An algorithm for traversing or searching tree or graph data structures, exploring neighbor nodes first.' },
  { day: 13, title: 'Depth-First Search (DFS)', explanation: 'An algorithm for traversing or searching tree or graph data structures, exploring as far as possible along each branch before backtracking.' },
  { day: 14, title: 'Heaps', explanation: 'A specialized tree-based data structure that is essentially an almost complete tree that satisfies the heap property.' },
  { day: 15, title: 'Sorting Algorithms', explanation: 'Algorithms that put elements of a list in a certain order, e.g., Bubble Sort, Merge Sort, Quick Sort.' },
  { day: 16, title: 'Merge Sort', explanation: 'A Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.' },
  { day: 17, title: 'Quick Sort', explanation: 'A Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.' },
  { day: 18, title: 'Dynamic Programming', explanation: 'A method for solving a complex problem by breaking it down into a collection of simpler subproblems.' },
  { day: 19, title: 'Greedy Algorithms', explanation: 'An algorithmic paradigm that builds up a solution piece by piece, always choosing the next piece that offers the most obvious and immediate benefit.' },
  { day: 20, title: 'Tries', explanation: 'A tree-like data structure, also known as a prefix tree, used for efficient retrieval of a key in a large dataset of strings.' },
  { day: 21, title: 'Kadane\'s Algorithm', explanation: 'An algorithm to find the contiguous subarray within a one-dimensional array of numbers that has the largest sum.' },
  { day: 22, title: 'Sliding Window', explanation: 'A technique used for problems that involve arrays/lists. It involves maintaining a subarray (window) that slides over the main array.' },
  { day: 23, title: 'Two Pointers', explanation: 'A technique that uses two pointers to iterate through a data structure, often an array, until they meet or satisfy a condition.' },
  { day: 24, title: 'Dijkstra\'s Algorithm', explanation: 'An algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks.' },
];

export const devAdventCalendarData: AdventDay[] = [
    { day: 1, title: 'Git & Version Control', explanation: 'The cornerstone of modern software development, allowing teams to manage changes to code over time.' },
    { day: 2, title: 'HTML/CSS Basics', explanation: 'The fundamental building blocks of the web. HTML provides the structure, and CSS handles the styling.' },
    { day: 3, title: 'JavaScript Fundamentals', explanation: 'The programming language of the web, enabling interactive and dynamic content.' },
    { day: 4, title: 'Responsive Design', explanation: 'The practice of making websites that look good on all devices, from desktops to mobile phones.' },
    { day: 5, title: 'APIs (Application Programming Interfaces)', explanation: 'Contracts that allow different software applications to communicate with each other.' },
    { day: 6, title: 'React.js', explanation: 'A popular JavaScript library for building user interfaces, based on a component architecture.' },
    { day: 7, title: 'Component State vs. Props', explanation: 'State is managed within a component, while props are passed to a component from its parent.' },
    { day: 8, title: 'Node.js & npm', explanation: 'Node.js is a JavaScript runtime for server-side development, and npm is its package manager.' },
    { day: 9, title: 'RESTful APIs', explanation: 'An architectural style for designing networked applications, based on HTTP methods.' },
    { day: 10, title: 'Databases (SQL vs. NoSQL)', explanation: 'SQL databases are relational and use structured query language. NoSQL databases are non-relational and more flexible.' },
    { day: 11, title: 'Authentication vs. Authorization', explanation: 'Authentication verifies who you are. Authorization determines what you are allowed to do.' },
    { day: 12, title: 'Deployment (CI/CD)', explanation: 'Continuous Integration/Continuous Deployment automates the process of testing and releasing software.' },
    { day: 13, title: 'Docker & Containers', explanation: 'A platform for developing, shipping, and running applications in isolated environments called containers.' },
    { day: 14, title: 'Cloud Computing (AWS, GCP, Azure)', explanation: 'On-demand delivery of IT resources over the Internet with pay-as-you-go pricing.' },
    { day: 15, title: 'Testing (Unit, Integration, E2E)', explanation: 'Different levels of software testing to ensure code quality and functionality.' },
    { day: 16, title: 'TypeScript', explanation: 'A superset of JavaScript that adds static types, improving code reliability and maintainability.' },
    { day: 17, title: 'GraphQL', explanation: 'A query language for APIs that allows clients to request exactly the data they need.' },
    { day: 18, title: 'WebSockets', explanation: 'A communication protocol that provides full-duplex communication channels over a single TCP connection.' },
    { day: 19, title: 'Serverless Functions', explanation: 'A cloud computing model where the cloud provider manages the server and scales the application automatically.' },
    { day: 20, title: 'Microservices', explanation: 'An architectural style that structures an application as a collection of loosely coupled services.' },
    { day: 21, title: 'Design Patterns', explanation: 'General, reusable solutions to commonly occurring problems within a given context in software design.' },
    { day: 22, title: 'Web Security (OWASP Top 10)', explanation: 'A standard awareness document for developers and web application security.' },
    { day: 23, title: 'Performance Optimization', explanation: 'Techniques to improve the speed and responsiveness of a web application.' },
    { day: 24, title: 'The Future of Web Dev', explanation: 'Exploring emerging technologies like WebAssembly, AI-powered tools, and the Metaverse.' },
];

export const sysDesignAdventCalendarData: AdventDay[] = [
    { day: 1, title: 'Scalability', explanation: 'The ability of a system to handle a growing amount of work by adding resources.' },
    { day: 2, title: 'Latency vs. Throughput', explanation: 'Latency is the time to perform an action. Throughput is the number of actions per unit of time.' },
    { day: 3, title: 'Load Balancing', explanation: 'Distributing network traffic across multiple servers to ensure no single server becomes a bottleneck.' },
    { day: 4, title: 'Caching', explanation: 'Storing copies of files or data in a temporary storage location so they can be accessed more quickly.' },
    { day: 5, title: 'Data Partitioning (Sharding)', explanation: 'Breaking up a large database into smaller, more manageable pieces called shards.' },
    { day: 6, title: 'Indexes', explanation: 'A data structure that improves the speed of data retrieval operations on a database table.' },
    { day: 7, title: 'Proxies', explanation: 'An intermediary server that sits between a client and a back-end server, often used for security or load balancing.' },
    { day: 8, title: 'Message Queues', explanation: 'A component that enables asynchronous communication between different parts of a system.' },
    { day: 9, title: 'Content Delivery Network (CDN)', explanation: 'A geographically distributed network of servers that work together to provide fast delivery of Internet content.' },
    { day: 10, title: 'CAP Theorem', explanation: 'A theorem stating that it is impossible for a distributed data store to simultaneously provide more than two out of three guarantees: Consistency, Availability, and Partition Tolerance.' },
    { day: 11, title: 'ACID vs. BASE', explanation: 'ACID (Atomicity, Consistency, Isolation, Durability) is a set of properties for reliable database transactions. BASE (Basically Available, Soft state, Eventually consistent) is a model for NoSQL databases.' },
    { day: 12, title: 'Rate Limiting', explanation: 'Controlling the rate of traffic sent or received by a network interface controller.' },
    { day: 13, title: 'Redundancy and Replication', explanation: 'Duplicating critical components or functions of a system with the intention of increasing reliability.' },
    { day: 14, title: 'Database Replication', explanation: 'The process of creating and maintaining multiple copies of the same database for high availability and disaster recovery.' },
    { day: 15, title: 'Consistent Hashing', explanation: 'A special kind of hashing such that when a hash table is resized, only a small number of keys need to be remapped.' },
    { day: 16, title: 'API Gateway', explanation: 'A single entry point for all clients, which then routes requests to the appropriate microservice.' },
    { day: 17, title: 'Service Discovery', explanation: 'The process of automatically detecting devices and services on a network.' },
    { day: 18, title: 'Distributed Logging', explanation: 'Collecting and aggregating logs from multiple services and servers into a centralized location.' },
    { day: 19, title: 'Distributed Tracing', explanation: 'A method used to profile and monitor applications, especially those built using a microservices architecture.' },
    { day: 20, title: 'Metrics and Monitoring', explanation: 'Collecting and analyzing data to track the performance and health of a system.' },
    { day: 21, title: 'Back-of-the-envelope Estimation', explanation: 'Making rough calculations to quickly estimate the scale and resource requirements of a system.' },
    { day: 22, title: 'Design a URL Shortener', explanation: 'A classic system design interview question involving hashing, databases, and API design.' },
    { day: 23, title: 'Design a News Feed', explanation: 'A common system design problem focusing on data modeling, caching, and scalability for a social media feed.' },
    { day: 24, title: 'Design a Distributed Message Queue', explanation: 'A complex design problem involving topics like pub/sub, asynchronous processing, and high availability.' },
];

    

    