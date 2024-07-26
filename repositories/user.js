module.exports = (model) => ({
  read: (email) =>
    model.findOne({
      attibutes: ["id", "hash"],
      where: { email },
    }),
  create: ({ email, hash }) =>
    model.create({
      email,
      hash,
    }),
});
