import { TestBed } from '@angular/core/testing';

import { PropietariosService } from './propietario.service';

describe('PropietarioService', () => {
  let service: PropietariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropietariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
