function welcome(name: string) {
    console.log("hello");

    const user = {
        name: "Rushi",
    };
    const fname = user.name;
    return name + fname;
}

welcome("Rushi");
