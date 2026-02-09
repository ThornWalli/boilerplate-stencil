## Benchmarks
```bash
node scripts/benchmark.js
```

### Ubuntu 24.04.3 LTS
```
IO: 3.3 GB/s
CPU: AMD Ryzen 9 9950X
MEM: 96157MB
```
```
Build Benchmark Results: 
  Iterations: 1000 
  Average:    6.00s 
  Minimum:    5.85s 
  Maximum:    6.43s 
  Total:      1.67h 

Watch Benchmark Results: 
  Iterations: 1000 
  Average:    1530.14ms 
  Minimum:    1266.28ms 
  Maximum:    2412.83ms 
  Total:      25.50m 
```
Detailed output is located here: [ubuntu_24.04.3.benchmark.txt](ubuntu_24.04.3.benchmark.txt)

Mit dynamischen Imports:
```
Build Benchmark Results: 
  Iterations: 995 
  Average:    3502.99ms 
  Minimum:    3382.99ms 
  Maximum:    4200.74ms 
  Total:      58.09m 

Watch Benchmark Results: 
  Iterations: 1000 
  Average:    251.82ms 
  Minimum:    194.35ms 
  Maximum:    460.53ms 
  Total:      4.20m 

```
