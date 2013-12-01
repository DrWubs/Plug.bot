API.addEventListener(API.USER_JOIN, join);
function join(user) 
{ 
API.sendChat("@" + user.username + " Enjoy your stay in ForcedU2 Bass! We reccomend that you read our rules: http://bit.ly/FU2-Bass")
}

API.addEventListener(API.USER_LEAVE, leave);
function leave(user) 
{ 
API.sendChat(user.username + " left the room")
}

API.addEventListener(API.MOD_SKIP, skip);
function skip(user) 
{ 
API.sendChat("Sorry, your song has violated one of the room's rules. Please read the rules to see what went wrong. http://bit.ly/FU2-Bass")
}
