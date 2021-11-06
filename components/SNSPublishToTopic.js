// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-2';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-2:6177af85-6cf0-49e1-b630-97e129369d30'
});

const Name = document.getElementById("Name");
const Email = document.getElementById("Email");
const TypeOfMessage = document.getElementById("TypeOfMessage");
const textEntry = document.getElementById("textEntry");
const Send = document.getElementById("Send");
const Thanks = document.getElementById("Thanks");

Send.addEventListener('click',function snsTopic() {
    // Create publish parameters
    const params = {
        TopicArn: "arn:aws:sns:us-east-2:237600839617:ContactMe",
        Subject: "From personal website",
        Message:
            "Name: " + Name.value +
            "\nEmail: " + Email.value +
            "\nType of message: " + TypeOfMessage.value +
            "\nMessage: " + textEntry.value
    };

    // Publish the message to topic
    const publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'});
    publishTextPromise.publish(params).promise();

    Name.value = "";
    Email.value = "";
    TypeOfMessage.value = "";
    textEntry.value = "";

    Thanks.style.display = "block";
})