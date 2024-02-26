import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { JunodService } from './junod.service';
import { MegaMenuModule } from 'primeng/megamenu';
import { MegaMenuItem } from 'primeng/api';
import { Terminal, TerminalModule, TerminalService } from 'primeng/terminal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MegaMenuModule, TerminalModule],
  providers: [TerminalService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  items: MegaMenuItem[] | undefined;

  data: any;

  @ViewChild('terminal') terminal!: Terminal;

  subscription!: Subscription;

  private _commandResult: string = '';
  public get commandResult(): string {
    return this._commandResult;
  }
  public set commandResult(value: string) {
    this._commandResult = value;
    console.log('a enviar ');
    this.terminalService.sendResponse(this._commandResult);
  }

  inputCommand!: ElementRef<HTMLInputElement>;

  constructor(
    private junodService: JunodService,
    private terminalService: TerminalService
  ) {}

  ngOnInit(): void {
    this.subscription = this.terminalService.commandHandler.subscribe(
      async (command) => {
        console.log(this.terminal.commands);
        if (command.length > 4 && command.split(' ')[0] === 'junod') {
          //this.terminalService.sendResponse('Ok');

          const res = await this.junodService
            .executeJunodCommand(command)
            .toPromise();
          if (res === undefined) {
            this.terminalService.sendResponse('Unknown command: ' + command);
            return;
          }
          this.data = res.result;
          this.commandResult = res.result;
          this.terminal.cd.detectChanges();
        } else {
          this.terminalService.sendResponse('Unknown command: ' + command);
        }
      }
    );
  }
}
