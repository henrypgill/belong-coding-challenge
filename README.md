# Belong Technical Take-Home

Please don't spend longer than 2 hours on this exercise. It's not about finishing as much as it is your approach. 
Task 
Create a React web app that presents a user with key information about his/her investment. Two endpoints are provided which will provide all of the necessary data. 
- transactions: https://b4aayk6lub.execute-api.eu-west2.amazonaws.com/belong/transactions 
- valuations: https://b4aayk6lub.execute-api.eu-west-2.amazonaws.com/belong/valuations

## 0. Calling the Endpoints

Create a React Web app that can make the calls to the aforementioned endpoints, and store their data. Include a button that can be pressed to refresh all data.

## 1. Displaying Transactions 

Display a list of the user's transactions. 
A user should be able to sort them by transaction date, or by the transaction amount on the client side. 
It should also be possible to filter on the transaction type. The types are PAYMENT and INVESTMENT 
Upon clicking a transaction, the full transaction data should be revealed.

## 2. Displaying Investment Info 

Create a row of tiles, each displaying one of the following: 
Their total invested amount. (This is the sum of all transactions with type PAYMENT and subtype SINGLE_PAYMENT or type PAYMENT and subtype TOP_UP_PAYMENT , minus the sum of all transactions with type PAYMENT and subtype WITHDRAWAL ). 
The number of days they have been invested. (This is the number of days since the first transaction with type: PAYMENT and subtype: SINGLE_PAYMENT ).
The % percentage return of their investment. (This is calculated as 
(mostRecentValuation - totalInvestedAmount) / totalInvestedAmount ). The highest valuation 
The lowest valuation 

## Other Remarks 

You are at liberty to display and arrange the list, and the row of tiles as you see fit. Feel free to use any UI libraries (Material UI, Tailwind, etc.) or write your own styles. Handling errors, retries etc. is not important for this exercise, beyond simply catching them. 
There is no requirement for anything to persist between page loads. 
Please give percentage values to 2.d.p. 
You are welcome to write unit tests if beneficial, but are under no requirement to do so. In the transactions list, you can display dates in a suitable format of your choosing.
##Submission 
Once finished, please commit your work to a public GitHub repo, then include it in your reply to this email. And of course, please don't hesitate to reach out if you have any further questions. 
# belong-coding-challenge
