type User = {
    name: string;
    LastName: string;
    birthday: string;
    Age?: number;
}

const Affonso: User = {
    name: "Affonso",
    LastName: "Kopmann",
    birthday: "26/11/1982",
    Age: 39
}

// union types
// | (como se fosse o ||)

type LogLevel = 'info' | 'error' | 'debug';

function logMessage(message: string, level: LogLevel){
    console.log(`[${level}] - ${message}`)
}

logMessage("uma mensagem info", "info");
logMessage("uma mensagem de erro", "error")
logMessage("uma mensagem de debug", "debug")
// logMessage("uma mensagem de debug", "dbug")



// intersection type: &

type About = {
    bio: string;
    Interests: string[]
}

type Profile = User & About;

const userWithProfile: Profile = {
    name: "affonso",
    LastName: "kopmann",
    birthday: "26/11/1982",
    bio: "teste teste teste",
    Interests: ["tech", "games", "pcs"]
}
