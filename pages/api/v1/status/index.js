function status(request, response) {
  response.status(200).json({ chave: "5000" });
}

export default status;
