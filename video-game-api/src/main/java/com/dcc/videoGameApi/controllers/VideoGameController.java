package com.dcc.videoGameApi.controllers;

import com.dcc.videoGameApi.models.VideoGame;
//import com.dcc.videoGameApi.repository.VideoGameRepository;
import com.dcc.videoGameApi.service.VideoGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//import javax.persistence.Id;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class VideoGameController {

    @Autowired
    private VideoGameService service;

    //Example endpoint to return count of all games on DB. Should return 10000 in Postman
    @GetMapping("/count")
    public long GetCount(){
        return service.GetCountOfGames();
    }


    @GetMapping("/all")
    public List <VideoGame> GetAll() {return service.getAllVideoGames(); }

    @GetMapping("/getById/{id}")
    public Optional<VideoGame> getVideoGameById(@PathVariable Integer id){
        return service.getVideoGameById(id);
    }


}
