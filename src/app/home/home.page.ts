import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  charada: string = '';
  respostaCharada: string = '';
  respostaSecreta: string = '';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.solicitarCharada();
  }


  solicitarCharada() {
    const url = "http://lucasreno.kinghost.net/charada";
    this.http.get<any[]>(url).subscribe(response => {
      this.charada = response[0].pergunta;
      this.respostaSecreta = response[0].resposta;
    });
  }


  revelar() {
    this.respostaCharada = this.respostaSecreta;
  }


}
