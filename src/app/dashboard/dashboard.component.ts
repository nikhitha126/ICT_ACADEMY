import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  menuItems = [
    
      {
    name: 'Pizza',
    price: 299,
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg'
    },
    {
      name: 'Burger',
      price: 149,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
    },
    {
      name: 'Pasta',
      price: 199,
      image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb'
    },
    {
      name: 'Biryani',
      price: 249,
      image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0'
    },
    {
      name: 'Fried Rice',
      price: 179,
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b'
    },
    {
      name: 'Sandwich',
      price: 99,
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af'
    },
    {
      name: 'Noodles',
      price: 159,
      image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841'
    }
  ];

  cart: any[] = [];
  showCheckout = false;

  addItem(item: any) {
    const existing = this.cart.find(i => i.name === item.name);
    if (existing) existing.qty++;
    else this.cart.push({ ...item, qty: 1 });
  }

  increaseQty(item: any) {
    item.qty++;
  }

  decreaseQty(item: any) {
    item.qty--;
    if (item.qty <= 0) this.removeFromCart(item);
  }

  removeFromCart(item: any) {
    this.cart = this.cart.filter(i => i !== item);
  }

  getTotal() {
    return this.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  checkout() {
    this.showCheckout = true;
  }

  closeCheckout() {
    this.showCheckout = false;
    this.cart = [];
  }
}
