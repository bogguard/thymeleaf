package net.persgroep.poc.thymeleaf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.persgroep.poc.thymeleaf.exception.GuestFoundException;
import net.persgroep.poc.thymeleaf.model.Guest;
import net.persgroep.poc.thymeleaf.model.HotelData;
import net.persgroep.poc.thymeleaf.repository.HotelRepository;

@Service("hotelServiceImpl")
public class HotelServiceImpl implements HotelService {
	@Autowired
	HotelRepository hotelRepository;

	@Override
	public HotelData getHotelData() {
		HotelData data = new HotelData();
		data.setAddress("Catalunya Square, 225");
		data.setName("Barcelona Hotel");
		
		return data;
	}

	@Override
	public List<Guest> getGuestsList() {
		return hotelRepository.findAll();
	}
	
	@Override
	public List<Guest> getGuestsList(String surname) {
		return hotelRepository.findGuestsBySurname(surname);
	}

	@Override
	public void insertNewGuest(Guest newGuest) {
		if (hotelRepository.exists(newGuest.getId())) {
			throw new GuestFoundException();
		}
		
		hotelRepository.save(newGuest);
	}
}
