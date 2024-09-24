---
coverImage:
  src: "@/assets/blogs/pexels-cookiecutter-1148820.jpg"
  alt: "Photo by panumas nikhomkhai from Pexels"
  url: "https://www.pexels.com/photo/close-up-photo-of-mining-rig-1148820"
title: "How Do Nameservers Work?"
description: "Nameservers enable easy access to websites. This article explains how nameservers work and their importance in the digital world."
publishDate: "12 Sep 2024"
tags: ["internet", "basic", "server"]
---

## Understanding Nameservers

A nameserver is a key component of the Domain Name System (DNS) that functions to convert memorable domain names (like *example.com*) into IP addresses (like *192.0.2.1*) needed by computers to communicate on the internet. Nameservers act as translators between human-readable domain names and machine-understood IP addresses.

## How Nameservers Work

When you type a URL into your browser, the behind-the-scenes process to get the correct information through nameservers involves several important steps:

### Initiating the Request (DNS Query)
The process starts when you enter a domain name (e.g., *www.example.com*) into your browser. The browser then sends a request to the nameserver to find out the IP address of that domain.

### Caching
Before the request is sent out, the browser or operating system first checks the local cache. If the IP address of the requested domain is already stored in the cache (because it was accessed before), the browser will use that address directly without making further requests.

### DNS Recursor
If the information is not found in the cache, the request is forwarded to a **DNS recursor** (often provided by the ISP or public DNS like Google DNS). The recursor acts as an intermediary to find the requested IP address from the relevant nameservers.

### Requesting Information from Root Nameservers
The DNS recursor first sends the request to **Root Nameservers**, which serve as the starting point for finding the IP address of a domain. Root nameservers do not store domain IP addresses directly but provide references to **TLD Nameservers** (Top-Level Domain), which are responsible for domain extensions like *.com*, *.net*, or *.org*.

### TLD Nameservers
Once the request is forwarded to the TLD nameserver (e.g., for the domain *example.com*), the TLD nameserver will provide information about the **authoritative nameserver** responsible for that domain.

### Authoritative Nameservers
The authoritative nameserver is the final nameserver in this search that has complete information about the domain, including DNS records like **A records** (which map domain names to IP addresses). The authoritative nameserver will send the relevant IP address back to the DNS recursor.

### Returning Results to the Browser
After the DNS recursor obtains the IP address from the authoritative nameserver, this information is sent back to the browser. The browser then uses that IP address to connect to the web server hosting the requested site.

## Important Notes on Nameservers

1. **Primary and Secondary Nameservers**: Typically, a domain is configured with more than one nameserver for reliability. The primary nameserver acts as the main server, while the secondary nameserver is used as a backup if the primary nameserver fails.
   
2. **DNS Records**: Various types of DNS records (such as A, CNAME, MX, TXT) are stored in the authoritative nameserver, each serving a specific function, like directing email or domain verification.

3. **Propagation**: When changes are made to DNS (e.g., when you change hosting or transfer a domain), it takes time known as **DNS propagation** for these changes to spread to all nameservers worldwide, which can take up to 48 hours.

## Conclusion

Nameservers play a crucial role in making the internet more accessible to humans. By translating domain names into IP addresses, nameservers allow us to access websites simply by remembering easy-to-remember domain names, without having to remember difficult strings of numbers.
