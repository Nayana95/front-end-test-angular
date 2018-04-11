import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsData = [
    {
      title: "Chain Store Age",
      date: "Feb 22, 2016",
      headerText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: '2',
      description: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...',
    },
    {
      title: "Chain Store Age",
      date: "Feb 12, 2016",
      headerText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: '3',
      description: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...',
    },
    {
      title: "Chain Store Age",
      date: "Feb 13, 2016",
      headerText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: '4',
      description: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...',
    },
    {
      title: "Chain Store Age",
      date: "Feb 14, 2016",
      headerText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: '4',
      description: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...',
    },
    {
      title: "Chain Store Age",
      date: "Feb 15, 2016",
      headerText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: '6',
      description: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...',
    },
    {
      title: "Chain Store Age",
      date: "Feb 16, 2016",
      headerText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: '7',
      description: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...',
    },
    {
      title: "Chain Store Age",
      date: "Feb 17, 2016",
      headerText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: '8',
      description: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...',
    },
    {
      title: "Chain Store Age",
      date: "Feb 18, 2016",
      headerText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: '9',
      description: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...',
    },
    {
      title: "Chain Store Age",
      date: "Feb 19, 2016",
      headerText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: '10',
      description: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...',
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
