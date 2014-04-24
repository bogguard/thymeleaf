package net.persgroep.poc.thymeleaf.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.mongodb.Mongo;

@Configuration
@EnableMongoRepositories("net.persgroep.poc.thymeleaf.repository")
public class MongoDBConfiguration extends AbstractMongoConfiguration {

	@Override
	protected String getDatabaseName() {
		return "hotel-db";
	}

	@Override
	public Mongo mongo() throws Exception {
		return new Mongo("redsys.persgroep.be");
	}
}
