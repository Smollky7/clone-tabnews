function Status(request, response) {
  response.status(200).json({Chave: "Mensagem do 200"})
}
export default Status;