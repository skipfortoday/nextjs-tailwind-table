export const LOCAL_USER_KEY = "LOCAL_USER_KEY";
export const genderOptions = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
];
export const headerTableUser = [
  {
    name: "username",
    label: "USERNAME",
  },
  {
    name: "name",
    label: "NAME",
  },
  {
    name: "email",
    label: "EMAIL",
  },
  {
    name: "gender",
    label: "GENDER",
  },
  {
    name: "registerDate",
    label: "REGISTER DATE",
  },
];
export const initState = {
  page: 1,
  pageSize: 3,
  results: 10,
  inc: "gender,name,username,email,registered,login",
  //seed: "rizqiramadhani", remove seed to give interaction & indicator short table
  sort: null,
  keyword: null,
  gender: null,
};
