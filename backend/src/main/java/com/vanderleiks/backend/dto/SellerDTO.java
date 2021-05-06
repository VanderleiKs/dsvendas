package com.vanderleiks.backend.dto;

import com.vanderleiks.backend.entities.Seller;

public class SellerDTO {
    
    private Long id;
    private String name;

    public SellerDTO(){}

    public SellerDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public SellerDTO(Seller seller){
        id = seller.getId();
        name = seller.getName();
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }   
}
