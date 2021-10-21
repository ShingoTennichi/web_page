const id = document.getElementById("message");
let interval = 400;
const message = ["C", "O", "M", "I", "N", "G", " ", "S", "O", "O", "N", "."];
let index = 0;
const len = message.length;
const show_message = () => {
    setInterval(()=>{
        if(!(index === len)) {
            id.textContent += message[index];
            index+=1;
        }
    },interval)
};
show_message();