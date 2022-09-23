const router = require('express').Router();
const {Favorite} = require('../../models')

// GET all Favorites
router.get('/', async (req,res) => {
    try {
        const favoriteData = await Favorite.findAll();
        if (!favoriteData){
            res.status(404).json({message: 'No favorites found!'});
            return;
        }
        res.status(200).json(favoriteData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET all favorites for a specific user
router.get('/:user_id', async (req,res) => {
  try {
      const favoriteData = await Favorite.findAll({
          where: {
              user_id: req.params.user_id,
          },
      });
      if (!favoriteData){
          res.status(404).json({message: 'No favorite with that ID found!'});
          return;
      }
      res.status(200).json(favoriteData);
  } catch (err) {
      res.status(500).json(err);
  }
});

// create a favorite
router.post('/', async (req, res) => {
    try {
        const newFavorite = await Favorite.create(req.body);
        res.status(200).json(newFavorite);
    } catch (err) {
        res.status(500).json(err);
    }
});


// DELETE a Favorite
router.delete('/:id', async (req, res) => {
    try {
      const favoriteData = await Favorite.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!favoriteData) {
        res.status(404).json({ message: 'No listing with this id!' });
        return;
      }
      res.status(200).json(favoriteData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
