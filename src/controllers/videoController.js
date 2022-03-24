export const trending = (req, res) => {
  return res.render('home');
};

export const upload = (req, res) => {
  return res.send('Upload Video');
};

export const search = (req, res) => {
  return res.send('search');
};

export const watch = (req, res) => {
  return res.render('watch');
};

export const edit = (req, res) => {
  return res.send('Edit Video');
};

export const remove = (req, res) => {
  return res.send('Delete Video');
};
