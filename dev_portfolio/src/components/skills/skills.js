import React from 'react';
import PieChart from '../charts/doughnutChart'

const Skills = (props) => (
    <div className='row'>
        <div className='col s4'>
            <PieChart dataLabels={['Preciso Aprender', 'Conheço']} datasetsData={[5,95]} textTitle='HTML5' legendPosition="right"/>
        </div>
        <div className='col s4'>
            <PieChart dataLabels={['Preciso Aprender', 'Conheço']} datasetsData={[10,90]} textTitle='CSS3' legendPosition="right"/>
        </div>
        <div className='col s4'>
            <PieChart dataLabels={['Preciso Aprender', 'Conheço']} datasetsData={[40,60]} textTitle='Javascript' legendPosition="right"/>
        </div>
        <div className='col s4'>
            <PieChart dataLabels={['Preciso Aprender', 'Conheço']} datasetsData={[20,80]} textTitle='Jquery' legendPosition="right"/>
        </div>
        <div className='col s4'>
            <PieChart dataLabels={['Preciso Aprender', 'Conheço']} datasetsData={[70,30]} textTitle='NodeJS' legendPosition="right"/>
        </div>
        <div className='col s4'>
            <PieChart dataLabels={['Preciso Aprender', 'Conheço']} datasetsData={[60,40]} textTitle='ReactJS' legendPosition="right"/>
        </div>
        <div className='col s4'>
            <PieChart dataLabels={['Preciso Aprender', 'Conheço']} datasetsData={[50,50]} textTitle='Angular' legendPosition="right"/>
        </div>
        <div className='col s4'>
            <PieChart dataLabels={['Preciso Aprender', 'Conheço']} datasetsData={[20,80]} textTitle='VueJS' legendPosition="right"/>
        </div>
        <div className='col s4'>
            <PieChart dataLabels={['Preciso Aprender', 'Conheço']} datasetsData={[30,70]} textTitle='MySQL' legendPosition="right"/>
        </div>
      
    </div>
)

export default Skills;