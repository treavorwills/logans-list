const router = require('express').Router();
const { Category } = require('../../models');

//View all categories
router.get('/', async (req, res) => {
    try {
      const categoryData = await Category.findAll( {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      });
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//View one category
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Create a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update a category
router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.update(
      {
        name: req.body.name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete a category
router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deletedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;