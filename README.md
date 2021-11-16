# Lab 8 - Starter

## Check Your Understanding Questions: 

### 1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

The place I would fit my automated tests in my Recipe project development pipeline is within a Github action that runs whenever code is pushed. This is because it would make the code being pushed onto Github less buggy and work better consistently. It's an opportunity to make sure each part is working nicely progressively instead of all at once when it's harder to debug. Plus, a Github action would allow for a more organized and neat testing experience.

### Would you use an end to end test to check if a function is returning the correct output? (yes/no)

No

### 3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, because end-to-end testing attempts to simulate the whole application run, so it is more fitting. 

### 4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, because the length of a text is going to be checked by one function so in this case, we can test only a portion of the code.