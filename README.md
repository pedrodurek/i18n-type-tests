# i18n Type Tests

This project aims to test the `t` function from i18n fully type-safe ([PR#1193](https://github.com/i18next/react-i18next/pull/1193)) considering the "worst-case" scenarios. The project contains 3 namespaces (ns1, ns2, ns3), ns1 and ns2 have 1274 keys each and ns3 5099 keys.

## Results

Timing to retrieve keys:

|                 | N# of keys |
| --------------- | :--------: |
| ns1 & ns2       |    2548    |
| ns1 & ns2 & ns3 |    7647    |

|                         | Timing (ns1 & ns2) | Timing (ns1 & ns2 & ns3) |
| ----------------------- | :----------------: | -----------------------: |
| Memory 16GB - 6 Core I7 |    0.5 ~ 1 sec     |                2 ~ 3 sec |
| Memory 8GB - 4 Core I5  |    0.5 ~ 1 sec     |                    3 sec |
