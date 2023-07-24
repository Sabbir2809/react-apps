import React, { useState } from 'react';
import ListGroup from './components/ListGroup/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import Like from './components/Like';
import Bugs from './components/Bugs';
import Tags from './components/Tags';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import ExpandableText from './components/ExpandableText';
import FormUseRef from './components/Form/FormUseRef';
import FormUseState from './components/Form/FormUseState';
import ReactHookForm from './components/Form/ReactHookForm';
import ExpenseList from './components/Expense-Tracker/components/ExpenseList';
import ExpenseFilter from './components/Expense-Tracker/components/ExpenseFilter';
import ExpenseForm from './components/Expense-Tracker/components/ExpenseForm';
import UseEffect from './components/Backend/UseEffect';
import ProductList from './components/Backend/ProductList';

const App = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  let items = ['Dhaka', 'Chittagong', 'Rajshahi', 'Khulna', 'Borishal', 'Mymensingh', 'Sylhet', 'Rangpur'];

  const handleSelectItem = (item) => {
    console.log(item);
  };

  const [cartItems, setCartItems] = useState(['Product 1', 'Product 2']);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 10, category: 'Groceries' },
    { id: 2, description: 'bbb', amount: 15, category: 'Utilities' },
    { id: 3, description: 'ccc', amount: 20, category: 'Entertainment' },
    { id: 4, description: 'ddd', amount: 25, category: 'Utilities' },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      {/* {alertVisible && <Alert onClose={() => setAlertVisible(false)}>Beginning React.js</Alert>}
      <Button color='success' onClick={() => setAlertVisible(true)}>
        Alert
      </Button>
      <Like />
      <Bugs />
      <Tags />
      <ListGroup items={items} title='Cities' onSelectItem={handleSelectItem} />
      <NavBar cartItemsCount={cartItems} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      <ExpandableText maxChars={100}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, provident eius laborum voluptas error
        doloremque similique est possimus velit, perferendis ratione molestiae corporis deserunt earum modi
        dolores ad sint. Blanditiis accusamus sit distinctio ullam officia est animi cumque dolore at, optio
        unde aliquam sequi quisquam quia odio voluptatum. Magnam harum beatae quibusdam illum ullam voluptates
        ut at quasi, consequuntur ducimus. Adipisci assumenda illo quidem laudantium a vero sint provident
        soluta incidunt dolores earum, quasi nobis necessitatibus deleniti eaque reiciendis corrupti odio
        officia facere neque rerum itaque dignissimos dolor nulla! Nam provident error molestiae nihil est
        rerum accusantium quibusdam in modi? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et rem
        vitae non. Praesentium corrupti error, perferendis tempora quod vel accusantium repellat aut, a,
        mollitia voluptas ipsa deleniti voluptatem saepe exercitationem.
      </ExpandableText> */}
      {/* <div>
        <FormUseRef />
      <FormUseState />
      <ReactHookForm />
      </div> */}
      {/* <section>
        <div className='mb-5'>
          <ExpenseForm
            onSubmit={(newExpense) => setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }])}
          />
        </div>
        <div className='mb-3'>
          <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
        </div>
        <ExpenseList
          expenses={visibleExpenses}
          OnDelete={(id) => setExpenses(expenses.filter((expense) => expense.id !== id))}
        />
      </section> */}
      <UseEffect />
    </div>
  );
};

export default App;
