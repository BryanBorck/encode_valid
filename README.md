# Valid Protocol - A Blockchain Solution to Fake News (Encode Hackathon)

In this project, we propose a decentralized, blockchain-based solution to the hazards presented by the propagation of Fake News.

## Introduction 

The massive adoption of social media and distributed communication has provided an unprecedented load of information, where the sheer mass of data is behemothic - to the point where it has become almost impossible to provide the necessary context for every single bit transmitted to the general public.

This lack of context - therefore, the validity of its content - is now building a society where it becomes increasingly challenging to filter reality from its dystopic counterparts - let it be data regarding the health effects of a can of soda, the effectiveness of vaccination of even if an audio log of a president is, indeed, his, or just an AI fabrication.

Humanity is on the verge of corrupting the Age of Information, and it is crystal clear how catastrophic such mishandling of data may be, urging a quick and assertive answer to this problem.

Multiple solutions have been thrown around through the heated debate pool, such as using censorship and law enforcement to suppress misinformation through the web. 

However, our team believes this solution is not ideal for a multitude of reasons, such as:
- Proven inefficiency of this method, whether by algorithmic mismatch or omission;
- Danger posed to freedom of speech since the data provided to train these algorithms will always be biased in some shape, way, or form;

Our team believes that only technology is truly capable of solving the problems created by technology, so we propose the Valid Protocol.

Valid Protocol is a Decentralized Application that utilizes blockchain in a fundamentally different shift: it understands blockchain as a database with no hierarchies, no compromises, and minimum bias.
- Its distributed nature prevents data loss due to malfunction, hacking, or intentional destruction of servers;
- Its decentralized nature prevents a centralized entity (such as a company, a government, or another institution) from providing biased standards for algorithms on which bit of information is indeed trustworthy or evaluated as fake;
- Its immutability prevents hacking on logging data (such as data regarding which trustworthy sources published which kind of content).

Let's see now how Valid Protocol operates.

## Valid Protocol

Our solution thrives upon a simple idea.

The way we check if some piece of information is true isn't actually to check its veracity - but to check its source. 
If NASA, for instance, published some specs on their new rocket, we would never be able to ensure its veracity, and they can actually be wrong - publishing then a correction afterward. But even if they're wrong in the beginning, they are the most reliable source on the topic, so we trust the content due to the credibility of the source.

Valid Protocol uses a Smart Contract to list credited sources (such as CNN, BBC, WHO, NASA, UN, etc.) and their wallet addresses. The information they input into the blockchain is then, for memory purposes, hashed into a fixed bytes32 piece of data, which is unique.  This hash identifies the content published by the source.

If a user wishes to know whether a piece of information is true, all it must do is input this information into the blockchain through the smart contract. It will hash the information inputed and then compare it to the log - if a 100% match is found, then the input was indeed published by a verifiable source - hence, it is not fake. On the other hand, if a mismatch is the product, then it possibly is fake news.



