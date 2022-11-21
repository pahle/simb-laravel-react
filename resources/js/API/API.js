const host = "https://data.bmkg.go.id/DataMKG/TEWS";

export const getGempaTerkini = async () => {
  return await fetch(`${host}/autogempa.json`).then((response) =>
    response.json()
  );
};

export const getGempaTerasa = async () => {
  return await fetch(`${host}/gempadirasakan.json`).then((response) =>
    response.json()
  );
};

export const getGempaList = async () => {
  return await fetch(`${host}/gempaterkini.json`).then((response) =>
    response.json()
  );
};