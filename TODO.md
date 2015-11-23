# String Repository
## Optimizations
- Make writing of changes asynchronous
- Make sure that only one write operation is executed at a time
- If there are multiple write operations queued up, only execute one write
- Delay writing into the next run loop, so that multiple writes are grouped into a single write