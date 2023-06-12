//Blood Donor Database
const blood_donor = [
  {
    name: "Alfie",
    age: 26,
    cell: "01772296286",
    location: "Dhaka",
    blood_group: "O+",
    donations: [
      { name: "Jacob", donate_date: "2018-05-22" },
      { name: "Thomas", donate_date: "2019-05-22" },
      { name: "Finley", donate_date: "2020-05-22" },
    ],
    last_donate_date: "2020-05-22",
    is_available: "",
    massage: "",
  },
  {
    name: "Theo",
    age: 29,
    cell: "01772296285",
    location: "Cumilla",
    blood_group: "O+",
    donations: [
      { name: "Lucas", donate_date: "2017-08-22" },
      { name: "William", donate_date: "2019-06-23" },
      { name: "Arlo", donate_date: "2020-03-27" },
    ],
    last_donate_date: "2020-03-27",
    is_available: "",
    massage: "",
  },
  {
    name: "Charlie",
    age: 27,
    cell: "01772269284",
    location: "Chadpur",
    blood_group: "A+",
    donations: [
      { name: "Teddy", donate_date: "2017-02-02" },
      { name: "Isaac", donate_date: "2018-06-24" },
      { name: "Roman", donate_date: "2020-03-10" },
    ],
    last_donate_date: "2020-03-10",
    is_available: "",
    massage: "",
  },
  {
    name: "Jack",
    age: 30,
    cell: "01772269283",
    location: "Chittagong",
    blood_group: "B+",
    donations: [
      { name: "Joshua", donate_date: "2017-10-22" },
      { name: "Luca", donate_date: "2018-05-29" },
      { name: "James", donate_date: "2019-11-20" },
    ],
    last_donate_date: "2019-11-20",
    is_available: "",
    massage: "",
  },
  {
    name: "Freddie",
    age: 41,
    cell: "01772296282",
    location: "Feni",
    blood_group: "AB+",
    donations: [
      { name: "Edward", donate_date: "2017-05-22" },
      { name: "Alexander", donate_date: "2019-05-23" },
      { name: "Tommy", donate_date: "2020-02-20" },
    ],
    last_donate_date: "2020-02-20",
    is_available: "",
    massage: "",
  },
  {
    name: "Elijah",
    age: 42,
    cell: "01772296281",
    location: "Cox's Bazar",
    blood_group: "B+",
    donations: [
      { name: "Max", donate_date: "2017-05-22" },
      { name: "Mohammed", donate_date: "2019-05-23" },
      { name: "Albie", donate_date: "2021-02-20" },
    ],
    last_donate_date: "2021-02-20",
    is_available: "",
    massage: "",
  },
  {
    name: "Mason",
    age: 22,
    cell: "01772296280",
    location: "TEKNAP",
    blood_group: "B+",
    donations: [
      { name: "Jude", donate_date: "2017-05-22" },
      { name: "Sebastian", donate_date: "2019-05-23" },
      { name: "Reuben", donate_date: "2023-06-05" },
    ],
    last_donate_date: "2023-06-05",
    is_available: "",
    massage: "",
  },
  {
    name: "Ethan",
    age: 32,
    cell: "01772296279",
    location: "Potiya",
    blood_group: "B+",
    donations: [
      { name: "Benjamin", donate_date: "2017-05-22" },
      { name: "Louie", donate_date: "2019-05-23" },
      { name: "Rory", donate_date: "2023-06-05" },
    ],
    last_donate_date: "2023-06-05",
    is_available: "",
    massage: "",
  },
  {
    name: "Reggie",
    age: 26,
    cell: "01772296278",
    location: "Sylhet",
    blood_group: "B-",
    donations: [
      { name: "Joseph", donate_date: "2017-05-22" },
      { name: "Hugo", donate_date: "2019-05-23" },
      { name: "Adam", donate_date: "2023-06-05" },
    ],
    last_donate_date: "2023-06-05",
    is_available: "",
    massage: "",
  },
  {
    name: "Michael",
    age: 49,
    cell: "01772296277",
    location: "Habiganj",
    blood_group: "B+",
    donations: [
      { name: "John", donate_date: "2017-05-22" },
      { name: "Robert", donate_date: "2019-05-23" },
      { name: "James", donate_date: "2021-02-20" },
    ],
    last_donate_date: "2021-02-20",
    is_available: "",
    massage: "",
  },
  {
    name: "Joseph",
    age: 44,
    cell: "01772296276",
    location: "Japlong",
    blood_group: "O-",
    donations: [
      { name: "Richard", donate_date: "2017-05-22" },
      { name: "William", donate_date: "2019-05-23" },
      { name: "David", donate_date: "2021-02-20" },
    ],
    last_donate_date: "2021-02-20",
    is_available: "",
    massage: "",
  },
  {
    name: "Daniel",
    age: 23,
    cell: "01772296275",
    location: "Muhammadpur",
    blood_group: "A+",
    donations: [
      { name: "Charles", donate_date: "2017-05-22" },
      { name: "Christopher", donate_date: "2019-05-23" },
      { name: "Thomas", donate_date: "2021-02-20" },
    ],
    last_donate_date: "2021-02-20",
    is_available: "",
    massage: "",
  },
  {
    name: "Donald",
    age: 51,
    cell: "01772296274",
    location: "Dhaka",
    blood_group: "AB-",
    donations: [
      { name: "Mark", donate_date: "2017-05-22" },
      { name: "Anthony", donate_date: "2019-05-23" },
      { name: "Matthew", donate_date: "2021-02-20" },
    ],
    last_donate_date: "2021-02-20",
    is_available: "",
    massage: "",
  },
  {
    name: "Joshua",
    age: 45,
    cell: "01772296273",
    location: "Barishal",
    blood_group: "B+",
    donations: [
      { name: "Paul", donate_date: "2017-05-22" },
      { name: "Andrew", donate_date: "2019-05-23" },
      { name: "Steven", donate_date: "2021-02-20" },
    ],
    last_donate_date: "2021-02-20",
    is_available: "",
    massage: "",
  },
  {
    name: "George",
    age: 52,
    cell: "01772296272",
    location: "Pabna",
    blood_group: "O+",
    donations: [
      { name: "Brian", donate_date: "2017-05-22" },
      { name: "Kevin", donate_date: "2019-05-23" },
      { name: "Kenneth", donate_date: "2021-02-20" },
    ],
    last_donate_date: "2021-02-20",
    is_available: "",
    massage: "",
  },
  {
    name: "Edward",
    age: 47,
    cell: "01772296271",
    location: "Rangamati",
    blood_group: "A+",
    donations: [
      { name: "Jason", donate_date: "2017-05-22" },
      { name: "Ronald", donate_date: "2019-05-23" },
      { name: "Timothy", donate_date: "2021-02-20" },
    ],
    last_donate_date: "2021-02-20",
    is_available: "",
    massage: "",
  },
  {
    name: "Gary",
    age: 36,
    cell: "01772296270",
    location: "Maymannsing",
    blood_group: "A-",
    donations: [
      { name: "Jacob", donate_date: "2017-05-22" },
      { name: "Ryan", donate_date: "2019-05-23" },
      { name: "Jeffrey", donate_date: "2021-02-20" },
    ],
    last_donate_date: "2021-02-20",
    is_available: "",
    massage: "",
  },
  {
    name: "Brandon",
    age: 34,
    cell: "01772296269",
    location: "Faridpur",
    blood_group: "O-",
    donations: [
      { name: "Scott", donate_date: "2017-05-22" },
      { name: "Justin", donate_date: "2019-05-23" },
      { name: "Larry", donate_date: "2021-02-20" },
    ],
    last_donate_date: "2021-02-20",
    is_available: "",
    massage: "",
  },
  {
    name: "Stephen",
    age: 46,
    cell: "01772296268",
    location: "Bhola",
    blood_group: "O+",
    donations: [
      { name: "Jonathan", donate_date: "2017-05-22" },
      { name: "Eric", donate_date: "2019-05-23" },
      { name: "Nicholas", donate_date: "2021-02-20" },
    ],
    last_donate_date: "2021-02-20",
    is_available: "",
    massage: "",
  },
  {
    name: "Alexander",
    age: 45,
    cell: "01772296267",
    location: "Meherpur",
    blood_group: "B+",
    donations: [
      { name: "Gregory", donate_date: "2017-05-22" },
      { name: "Samuel", donate_date: "2019-05-23" },
      { name: "Benjamin", donate_date: "2021-02-20" },
    ],
    last_donate_date: "2022-02-20",
    is_available: "",
    massage: "",
  },
  {
    name: "Jack",
    age: 43,
    cell: "01772296266",
    location: "Chandina",
    blood_group: "A+",
    donations: [
      { name: "Raymond", donate_date: "2017-05-22" },
      { name: "Frank", donate_date: "2019-05-23" },
      { name: "Patrick", donate_date: "2020-02-20" },
    ],
    last_donate_date: "2020-02-20",
    is_available: "",
    massage: "",
  },
];

//lets get the search data from the user
const search_type = prompt(
  `Type how you want to search for a Blood Donor. Query types are (Blood Group , Mobile Number , Name , Location) Available`
);
//===================//lets filter the search query//====================================
//=======================================================================================
let search = null;
if (search_type.toLowerCase() === "blood group") {
  search = prompt(
    `Type What blood group donor you want to search.(ex: O+,O-,A+,A-,B+,B-,Ab+,AB-)`
  );
} else if (search_type.toLowerCase() === "mobile number") {
  search = prompt(`Type mobile number of donor`);
} else if (search_type.toLowerCase() === "name") {
  search = prompt(`Type the name of donor`);
} else if (search_type.toLowerCase() === "location") {
  search = prompt(`Type the location where you want a donor`);
} else {
  alert("invalid search type");
}
//===================lets find the donor is availabe or not==============================
//=======================================================================================
blood_donor.map((donor) => {
  const start_date = new Date(donor.last_donate_date);
  const current_date = new Date();
  const time_difference = current_date.getTime() - start_date.getTime();
  const date_difference = Math.floor(time_difference / (1000 * 3600 * 24));

  if (date_difference >= 120) {
    donor.is_available = true;
    donor.massage = `Yes ! Available`;
  } else {
    donor.is_available = false;
    donor.massage = `Not Available. will be available after ${
      120 - date_difference
    } days`;
  }
});

//===================//lets get the donor data by filter//=============================
//=======================================================================================

const search_result = blood_donor.filter(
  (data) =>
    data.name.toLowerCase() === search.toLowerCase() ||
    data.blood_group.toLowerCase() === search.toLowerCase() ||
    data.cell.toLowerCase() === search.toLowerCase() ||
    data.location.toLowerCase() === search.toLowerCase()
);

const final_result = [];
search_result.map((item) => {
  final_result.push(item);
});

if (final_result.length > 0) {
  console.table(final_result);
} else {
  console.log("No results found");
  console.log(
    "====================================All Blood Donors======================================="
  );
  blood_donor.map((person) => console.table(person));
}
