title : titleArray[i] //cloud titles
};

overall.push(myObj);
}

console.log(overall);
return overall;
}

render() {
return (
<div>
    {this.MultipleCloud(clusterData)}
    <hr/>
    <JsonTable rows={this.display()} columns={ columns } className='collab-highlight'/>
</div>
);
}
}

export default Clouds