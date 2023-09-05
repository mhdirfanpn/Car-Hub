import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiResponse, carData, userData } from 'src/app/interface';

import { UserService } from './user.service';
import { AuthService } from 'src/app/shared/service/auth.service';
import { USER_API } from 'src/app/config/api.config';
import { Router } from '@angular/router'; // Import Router

describe('UserService', () => {
  let service: UserService;
  let authService: AuthService;
  let httpTestingController: HttpTestingController;
  let router: Router; // Declare Router
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [UserService, AuthService],
    });

    service = TestBed.inject(UserService);
    authService = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router); // Inject Router
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login user and navigate to user/home', () => {
    const mockApiResponse = { success: true, token: 'mock-token',message:"asdsad" };
    const email = 'test@example.com';
    const password = 'password';

    spyOn(router, 'navigate');

    service.userLogin(email, password).subscribe((data) => {
      expect(data).toEqual(mockApiResponse);
      expect(router.navigate).toHaveBeenCalledWith(['/user/home']); // Check navigation
    });

    const req = httpTestingController.expectOne(`${USER_API}/login`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ email, password });
    req.flush(mockApiResponse);
  });

  
  it('should register user and navigate to user/login on success', () => {
    const mockApiResponse: ApiResponse = { success: true, message: 'Registration successful', token : "" };
    const userDetails: userData = { userName: 'testuser', email: 'test@example.com', password: 'password' };

    spyOn(router, 'navigate');

    service.registerUser(userDetails).subscribe((data) => {
      expect(data).toEqual(mockApiResponse);
      expect(router.navigate).toHaveBeenCalledWith(['/user/login']);
    });

    const req = httpTestingController.expectOne(`${USER_API}/register`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(userDetails);
    req.flush(mockApiResponse);
  });

  it('should not navigate on registration failure', () => {
    const mockApiResponse: ApiResponse = { success: false, message: 'Registration failed', token : ""  };
    const userDetails: userData = { userName: 'testuser', email: 'test@example.com', password: 'password' };

    spyOn(router, 'navigate');

    service.registerUser(userDetails).subscribe((data) => {
      expect(data).toEqual(mockApiResponse);
      expect(router.navigate).not.toHaveBeenCalled();
    });

    const req = httpTestingController.expectOne(`${USER_API}/register`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(userDetails);
    req.flush(mockApiResponse);
  });

  it('should get cars data', () => {
    const mockCars: carData[] = [
      { _id: '1', model: 'Car1', make_id: 'Make1', year: 2022, price: 20000, color: 'Red', image: 'car1.jpg' },
      { _id: '2', model: 'Car2', make_id: 'Make2', year: 2023, price: 25000, color: 'Blue', image: 'car2.jpg' }
    ];

    service.getCars().subscribe((cars) => {
      expect(cars).toEqual(mockCars);
    });

    const req = httpTestingController.expectOne(`${USER_API}/cars`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCars);
  });

  it('should get car details', () => {
    const carId = '123'; 
    const mockCarDetails: carData = {
      _id: carId,
      model: 'Car1',
      make_id: 'Make1',
      year: 2022,
      price: 20000,
      color: 'Red',
      image: 'car1.jpg'
    };

    service.getCarDetails(carId).subscribe((carDetails) => {
      expect(carDetails).toEqual(mockCarDetails);
    });

    const req = httpTestingController.expectOne(`${USER_API}/carDetails/${carId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCarDetails);
  });


  it('should get user from AuthService', () => {
    const mockUser: userData = { _id: '123', userName: 'testuser', email: 'test@example.com' };

    spyOn(authService, 'getDecodedAccessToken').and.returnValue(mockUser); // Mock getDecodedAccessToken

    const user = service.getUser();

    expect(user).toEqual(mockUser);
    expect(authService.getDecodedAccessToken).toHaveBeenCalledWith('user');
  });



});
