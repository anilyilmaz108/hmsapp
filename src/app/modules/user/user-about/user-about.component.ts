import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-user-about',
  templateUrl: './user-about.component.html',
  styleUrls: ['./user-about.component.css']
})
export class UserAboutComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    initFlowbite();
  }
  aboutTitle = "Yeditepe Üniversitesi Hastaneleri, üstün teknolojisi ve akıllı sistemlerle donatılmış alt yapısıyla, 26 Ağustos 2005 tarihinden itibaren hizmet vermektedir. Ulusal ve uluslararası alanda birçok başarıya sahip, profesör ve doçent ağırlıklı hekimlerden oluşan kadrosu ile yeni ve başarılı hekimler yetiştirmek üzere önemli çalışmalar yapmaktadır. Yeditepe Üniversite Hastanelerinin vizyonunun temelinde Türkiye’yi uluslararası alanda temsil etmek ve ülkemizi tıp dünyasında söz sahibi bir konuma getirmek vardır.Yeditepe Üniversitesi Hastaneleri Görüntüleme Ünitesi'nde yer alan Multislice CT (çok kesitli bilgisayarlı tomografi), 3 Tesla MR, PET-CT (Kanserli dokuları tespit eden, tarayan) ve Gama Kamera, teşhis ve tedavide büyük kolaylık sağlayan dünyada gelişmiş teknolojiye sahip cihazlardan bazılarıdır.Bilgisayar teknolojisinin son derece etkin olarak kullanıldığı Yeditepe Üniversitesi Hastanelerinde, Hastane Bilgi Sistemi (HIS) yazılımından yararlanılmaktadır. Bu yazılım, hem hasta bilgilerinin hızla toplanıp işlenerek, tanı ve tedavide kullanılabilmesine olanak tanırken, hem de hastanın görüntüleme ve laboratuvar sonuçları gibi bilgilerinin, bilgisayar ortamında sunulmasını ve saklanmasını sağlamaktadır. Bu sistemle doktorlarımız hastane dışındayken de hasta takibini elektronik ortamda yapabilmektedirler. Ayrıca bu sistem kâğıt dolaşımı ve bürokrasiyi en aza indirmekte, hasta ve hasta yakınlarının uğradığı zaman kaybını ortadan kaldırmaktadır.";
}
