import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CwriterComponent } from './cwriter.component';
import { FormsModule } from '@angular/forms'

describe('CwriterComponent', () => {
  let component: CwriterComponent;
  let fixture: ComponentFixture<CwriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CwriterComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));
  

  beforeEach(() => {
    fixture = TestBed.createComponent(CwriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check101', ()=>
  {
    component.input=101;
    component.f2()
   expect(component.result).toEqual('      one Hundred and  one  only ')
});

it('check1', ()=>
{
  component.input=1;
  component.f2()
 expect(component.result).toEqual('       one  only ')
});

it('check10', ()=>
{
  component.input=10;
  component.f2()
 expect(component.result).toEqual('       ten  only ')
});

it('check101.1', ()=>
{
  component.input=101.1;
  component.f2()
 expect(component.result).toEqual('      one Hundred and  one  and1/10')
});
it('check101.15', ()=>
{
  component.input=101.15;
  component.f2()
 expect(component.result).toEqual('      one Hundred and  one  and15/100')
});

it('check201.689', ()=>
{
  component.input=201.689;
  component.f2()
 expect(component.result).toEqual('      two Hundred and  one  and689/1000')
});

it('check555', ()=>
{
  component.input=555;
  component.f2()
 expect(component.result).toEqual('      five Hundred and  fifty five only ')
});

it('check412.33', ()=>
{
  component.input=412.33;
  component.f2()
 expect(component.result).toEqual('      four Hundred and  twelve  and33/100')
});

it('check99', ()=>
{
  component.input=99;
  component.f2()
 expect(component.result).toEqual('       ninety nine only ')
});


});