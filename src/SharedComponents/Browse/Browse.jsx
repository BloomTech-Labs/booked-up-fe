import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {data} from "../../data.js"


const content_library = data.content_library

const useStyles = makeStyles(theme => ({
    searchContainer: {
        padding: "1%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-end"
    },
    searchBar: {
        width: "25%",
        marginRight: "1%",
        marginLeft: "2%"
    },
    formControl: {
        marginLeft: ".5%"
    },
    filter: {
        border: "1px solid black",
        width: "6em",
        paddingLeft: "5%"
    },
    worksContainer: {
        border: "1px solid black",
        width: "95%",
        height: "22.5%",
        margin: "auto",
        padding: 0,
        display: "flex",
        alignItems: "center"
    },
    works: {
        border: "1px solid black",
        width: "20%",
        height: "11.25em"
    },
    title: {
        marginLeft: "2%"
    },
    button: {
        ...theme.typography.estimate,
        padding: ".275em",
        borderRadius: 0,
        
        border: "1px solid black",
        marginLeft: "1%",
        backgroundColor: theme.palette.secondary.main,
        color: "white"
    },
    featuredContainer: {
        width: "80%",
        height: "30%",
        margin: "auto"
    },
    bottomMargin: {
        marginBottom: "3em"
    },
    resultsContainer: {
        width: "95%",
        margin: "auto"
    }
}))


export default function Browse(props) {
    const [works, setWorks] = useState([{id: 0, title: "", description: ""}])
    const [filter, setFilter] = useState("all")
    const [value, setValue] = useState("")
    const [filteredWork, setFilteredWork] = useState()
    const classes = useStyles()


    const handleSearch = (e) => {
        e.preventDefault();
        setValue(e.target.value)
        console.log(value)
    }

    const handleChange = (e) => {
        e.preventDefault();
        setFilter(e.target.value);
        console.log(filter)
      };
    
    const handleSubmit = e => {
        e.preventDefault();
        setFilteredWork(content_library.filter(work => {
            if(filter==="all") {
                return work.title.toLowerCase().includes(value.toLowerCase()) || work.description.toLowerCase().includes(value.toLowerCase()) || work.genre.toLowerCase().includes(value.toLowerCase()) || work.author.toLowerCase().includes(value.toLowerCase())
            }
            else{
                return work[`${filter}`].toLowerCase().includes(value.toLowerCase())
            }
        }))
        console.log(filteredWork)
    }
    return(
        <>
            <div className={classes.searchContainer}>
                
                <TextField id="standard-search" label="Search" type="search" value={value} onChange={handleSearch} className={classes.searchBar}/>
                <FormControl className={classes.formControl}>
                    <Select
                        labelId="search-filter-label"
                        id="search-filter"
                        className={classes.filter}
                        value={filter}
                        onChange={handleChange}
                    >
                        <MenuItem value={"all"}>All</MenuItem>
                        <MenuItem value={"title"}>Title</MenuItem>
                        <MenuItem value={"author"}>Author</MenuItem>
                        <MenuItem value={"genre"}>Genre</MenuItem>
                    </Select>
                </FormControl>
                <Button className={classes.button} onClick={handleSubmit}>Go</Button>
            </div>
            <h2 className={classes.title}>Featured</h2>
            
            
                <Carousel className={classes.featuredContainer}>
                {content_library.map((cl, i) => (
                    <div key={i} className={classes.works}>
                        <p>{cl.title}</p>
                        <p>{cl.description}</p>
                    </div>
                ))}
                </Carousel>
            
            {!filteredWork && (
                <div>
            <h2 className={classes.title}>New Releases</h2>
            
            
            <Carousel indicators={false} className={classes.worksContainer}>
            {content_library.map((cl, i) => (
                <div key={i} className={classes.works}>
                    <p>{cl.title}</p>
                    <p>{cl.description}</p>
                </div>
            ))}
            </Carousel>
            <h2 className={classes.title}>Most Popular</h2>
            
            
            <Carousel indicators={false} className={classes.worksContainer}>
            {content_library.map((cl, i) => (
                <div key={i} className={classes.works}>
                    <p>{cl.title}</p>
                    <p>{cl.description}</p>
                </div>
            ))}
            </Carousel>
            </div>)}
            {filteredWork && (<div className={classes.resultsContainer}>
                <h2 className={classes.title}>Search Results</h2>
                    {filteredWork.map((cl, i) => (
                        <div key={i} className={classes.works}>
                            <p>{cl.title}</p>
                            <p>{cl.description}</p>
                        </div>
                    ))}
            </div>)}

            <div className={classes.bottomMargin}></div>
        </>
    )
}