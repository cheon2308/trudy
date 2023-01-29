type User = {
  name :string,
  phone :number,
  email? :string,
}
type Adult = {
  adult :boolean,
  phone :number,
}

type NewUser = User & Adult;

let signUpInfo :User & Adult = {
  name : 'cheon',
  phone : 1042771160,
  adult : true
}

console.log(signUpInfo)