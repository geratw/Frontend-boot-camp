const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, Menuitem, Order, User } = require('./models');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/menu', async (req, res) => {
  try {
    // Выбираем только нужные поля из Menuitem
    const menu = await Menuitem.findAll({
      attributes: ['id', 'title', 'picture', 'cost', 'callQuantity', 'description'],
    });
    res.json(menu);
  } catch (error) {
    console.error('Error fetching menu:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});


app.post('/orders', async (req, res) => {
  const { items, isActive } = req.body;
  try {
    const order = await Order.create({ items, isActive: true });
    res.json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.put('/orders/:id', async (req, res) => {
  const id = req.params.id;
  const { items } = req.body; // Исправлено на items

  try {
    const order = await Order.findByPk(id);
    if (order) {
      // Обновляем поля заказа
      await order.update({ items });
      res.json(order);
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});


app.delete('/orders/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const order = await Order.findByPk(id);
    if (order) {
      order.isActive = false;
      await order.save();
      res.json({ message: 'Order closed' });
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (error) {
    console.error('Error closing order:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.get('/orders', async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.post('/waiters', async (req, res) => {
  const { name, role, orders } = req.body;
  try {
    // Создаем пользователя с возможными значениями для name и role
    const user = await User.create({ name: name || null, role: role || null });

    // Если есть заказы, связываем их с пользователем
    if (orders && Array.isArray(orders)) {
      // Обновляем пользователя, устанавливая заказы
      await user.update({ orders });
    }

    res.json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: error.message });
  }
});


sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log('Database Connected!');
  });
});
