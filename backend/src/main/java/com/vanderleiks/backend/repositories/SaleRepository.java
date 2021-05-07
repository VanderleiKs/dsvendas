package com.vanderleiks.backend.repositories;

import java.util.List;

import com.vanderleiks.backend.dto.SaleSuccessDTO;
import com.vanderleiks.backend.dto.SaleSumDTO;
import com.vanderleiks.backend.entities.Sale;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Long> {
    
@Query("SELECT new com.vanderleiks.backend.dto.SaleSumDTO(sale.seller, SUM(sale.amount)) "
    +"FROM Sale as sale GROUP BY sale.seller")
List<SaleSumDTO> findAmountGrupedBySeller();

@Query("SELECT new com.vanderleiks.backend.dto.SaleSuccessDTO(sale.seller, SUM(sale.visited), SUM(sale.deals)) "
    +"FROM Sale as sale GROUP BY sale.seller")
List<SaleSuccessDTO> findsuccessGrupedBySeller();

}
