import data from "../data.json";

export default function getCampPaths() {
  const { CAMPS } = data;
  const ID = CAMPS.map((camp) => {
    return {
      params: {
        id: camp.id,
      },
    };
  });
  return ID;
}
