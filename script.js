let mails = [
    {
        from: "Borge Refsnes",
        subject: "Subject: Remember Me",
        body: "<p>Hello, i just wanted to let you know that i'll be home at lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> < p > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <p>Best Regards, <br>Borge Refsnes</p>",
        date: " Sep 27, 2015",
        emailpic: "image/avatar3.png"
    },
    {
        from: "Jane Doe",
        subject: " None",
        body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <p>Forever yours,<br>Jane</p>",
        date: "Sep 25, 2015",
        emailpic: "image/avatar5.png"
    },
    {
        from: "John Doe",
        subject: "None",
        body: "<p>Welcome.</p> <p>That's it!</p>",
        date: "Sep 23, 2015",
        emailpic: "image/avatar2.png"
    }
];


let images = document.getElementsByClassName("imagetombnail");
let fullnames = document.getElementsByClassName("fullname");
let subjects = document.getElementsByClassName("subject");
let bodies = document.getElementsByClassName("body");


for (let index = 0; index < images.length; index++) {
    images[index].src = mails[index].emailpic;
    fullnames[index].innerText = mails[index].from;
    subjects[index].innerText = mails[index].subject;
    bodies[index].innerHTML = mails[index].body.substring(0, 60) + "...";
}
