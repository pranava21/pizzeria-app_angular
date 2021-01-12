import { TestBed} from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check if the cart has 2 products', () => {
      let loginId = "shriya";
      localStorage.setItem('loginId',loginId);
      service.getPizzasInCart().subscribe((response) => {
          console.log(response);
      })
  })
});
