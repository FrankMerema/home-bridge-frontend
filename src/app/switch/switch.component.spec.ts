import {FormsModule} from '@angular/forms';
import {createTestComponentFactory, Spectator} from '@netbasal/spectator';
import {of} from 'rxjs/index';
import {HostService} from '../api/services/host.service';
import {SwitchService} from '../api/services/switch.service';
import {SwitchComponent} from './switch.component';

describe('SwitchComponent', () => {
  const createComponent = createTestComponentFactory({
    component: SwitchComponent,
    imports: [FormsModule],
    mocks: [SwitchService, HostService]
  });

  let spectator: Spectator<SwitchComponent>;

  beforeEach(() => {
    spectator = createComponent(null, false);

    spectator.get(SwitchService).getAllSwitchesForHost.andReturn(of({}));
    spectator.get(HostService).getAllHosts.and.returnValue(of([]));

    spectator.detectChanges();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
