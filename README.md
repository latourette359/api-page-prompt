# Modern Logic Sample Project

## Prompt

We are going to build a sparse decision table! A decision table is a visual representation of conditional logic involving 1 or more variables, where if the conditions are met a final action is triggered. Lets consider the following example, we want to make a decision table that represents prices for a particular house. Lets say we can determine the exact price we are willing to pay for a house based on three variables: # of bathrooms, square footage, within 10 blocks of an elementary school. Our decision table could look something like this: 


|  num_bathrooms  |  square footage  |  close to school  |  price  |   
|                 |                  |                   |         |
|       <=1       |       1000       |         t         | 100000  |
|                 |                  |                   |         |
|       1-3       |       2000       |         f         | 200000  |
|                 |                  |                   |         |
|        >4       |       3000       |         t         | 300000  |
|                 |                  |                   |         |


What makes this a "sparse" decision table is that not all possibilities are represented. This makes the decision table easier to represent visually.


## Setup

1. Install npm

2. Run the following from project root:
```
npm install
```

3. To run the project:
```
npm run-script start
```
This should serve the frontend at localhost:8081




