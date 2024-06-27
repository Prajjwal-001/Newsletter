Newsletter Signup with Node.js

A simple web application built with Node.js that allows users to sign up for a newsletter. This project demonstrates basic server-side processing of form data and integrates with the Mailchimp API for managing subscriptions.


Features

1. Newsletter Signup Form: Users can enter their name and email address to subscribe to the newsletter.
2. Server-Side Processing: Uses Node.js and Express to handle form submissions and interact with the Mailchimp API.
3. Mailchimp Integration: Utilizes the Mailchimp API to manage subscriber lists and send confirmation emails.
4. Error Handling: Validates user input and displays appropriate error messages for invalid submissions.
5. Responsive Design: Basic styling with Bootstrap ensures a responsive and user-friendly interface.

Setup Instructions:

Clone the Repository:
  
  Code:
  
    git clone https://github.com/your-username/newsletter-signup-node.git
    cd newsletter-signup-node

Install Dependencies:
   
   Code:
    
    npm install

Set Environment Variables:
    
  Create a .env file in the root directory and add your Mailchimp API key and audience ID:
  
  Code:  
    
    API_KEY=your_mailchimp_api_key
    AUDIENCE_ID=your_mailchimp_audience_id

Start the Server:
  
  Code:
  
    npm start

The server will start running at http://localhost:3000.

Access the Application:

  Open your web browser and go to http://localhost:3000 to view and interact with the newsletter signup form.

Deployment:

This project can be deployed to platforms like Heroku, AWS, or any Node.js hosting service. Make sure to set the environment variables in your deployment environment for secure handling of API keys.

Technologies Used:

   1. Node.js: Server-side JavaScript runtime environment.
   2.Express: Web framework for Node.js.
   3. Mailchimp API: For managing newsletter subscriptions.
   4.Bootstrap: Front-end framework for responsive design.

Contributing:

  Contributions are welcome! Fork the repository and submit a pull request with your improvements.

Author:

  Prajjwal Singh
