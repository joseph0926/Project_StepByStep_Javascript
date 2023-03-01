const url = "../../../DUMMY_API.json";

let dummyData;

export const fetchDummyData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    dummyData = data.DUMMY_DATA;
  } catch (error) {
    console.log(error);
  }
  return dummyData;
};
